import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { startTransition, useMemo } from "react";

type ValidValues = string | string[];

export const useQueryParams = <T extends ValidValues>(
  name: string,
  defaultValue?: T,
  options?: { scroll?: boolean },
  // eslint-disable-next-line no-unused-vars
): [T | null, (newValue: T | null) => void] => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const value = useMemo(() => {
    const raw = searchParams.get(name);
    if (raw === null) {
      return defaultValue ?? null;
    }
    if (Array.isArray(defaultValue)) {
      return raw.split(",") as T;
    }
    return raw as T;
  }, [searchParams, defaultValue, name]);

  function setValue(newValue: T | null) {
    const _searchParams = new URLSearchParams(searchParams);
    if (newValue === null) {
      _searchParams.delete(name);
    } else if (Array.isArray(newValue)) {
      _searchParams.set(name, newValue.join(","));
    } else {
      _searchParams.set(name, newValue);
    }

    startTransition(() => {
      router.push(`${pathname}?${_searchParams.toString()}`, options);
    });
  }

  return [value, setValue];
};
