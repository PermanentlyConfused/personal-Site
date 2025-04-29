export function scrollToSection(id: string, top?: boolean) {
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({
      behavior: "smooth",
      block: top ? "nearest" : "center",
      inline: "center",
    });
  }
}
