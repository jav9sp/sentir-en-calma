export function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD") // descompone tildes en caracteres base + marca
    .replace(/[\u0300-\u036f]/g, "") // elimina las marcas (tildes)
    .replace(/ñ/g, "n")
    .replace(/\s+/g, "-") // espacios a guiones
    .replace(/[^\w\-]+/g, "") // elimina caracteres no alfanuméricos excepto guiones
    .replace(/\-\-+/g, "-") // evita múltiples guiones seguidos
    .replace(/^-+|-+$/g, ""); // quita guiones al inicio/final
}
