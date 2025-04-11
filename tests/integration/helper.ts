export function hasValidField<T extends object>(
  obj: T | null | undefined,
  field: keyof T
): boolean {
  return (
    obj !== null && obj !== undefined && field in obj && obj[field] != null
  );
}
