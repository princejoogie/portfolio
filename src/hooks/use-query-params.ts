import { usePathname, useRouter } from "next/navigation";
import { startTransition, useEffect, useState } from "react";

type ValidValues = string | string[];

const parseQueryValue = <T extends ValidValues>(
  raw: string | null,
  defaultValue?: T,
): T | null => {
  if (raw === null) {
    return defaultValue ?? null;
  }

  if (Array.isArray(defaultValue)) {
    return raw.split(",") as T;
  }

  return raw as T;
};

const readQueryValue = <T extends ValidValues>(
  name: string,
  defaultValue?: T,
): T | null => {
  if (typeof window === "undefined") {
    return defaultValue ?? null;
  }

  return parseQueryValue(
    new URLSearchParams(window.location.search).get(name),
    defaultValue,
  );
};

export const useQueryParams = <T extends ValidValues>(
  name: string,
  defaultValue?: T,
  options?: { scroll?: boolean },
  // eslint-disable-next-line no-unused-vars
): [T | null, (newValue: T | null) => void] => {
  const pathname = usePathname();
  const router = useRouter();
  const [value, setCurrentValue] = useState<T | null>(
    () => defaultValue ?? null,
  );

  useEffect(() => {
    const syncValue = () => {
      setCurrentValue(readQueryValue(name, defaultValue));
    };

    syncValue();
    window.addEventListener("popstate", syncValue);

    return () => window.removeEventListener("popstate", syncValue);
  }, [defaultValue, name]);

  function setValue(newValue: T | null) {
    const searchParams = new URLSearchParams(window.location.search);
    if (newValue === null) {
      searchParams.delete(name);
    } else if (Array.isArray(newValue)) {
      searchParams.set(name, newValue.join(","));
    } else {
      searchParams.set(name, newValue);
    }

    setCurrentValue(newValue ?? defaultValue ?? null);

    startTransition(() => {
      const queryString = searchParams.toString();
      router.push(
        `${pathname}${queryString ? `?${queryString}` : ""}`,
        options,
      );
    });
  }

  return [value, setValue];
};
