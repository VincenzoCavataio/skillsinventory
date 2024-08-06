export function validateEmail(email: string): boolean {
  // Definisci l'espressione regolare per validare l'email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Controlla se l'email rispetta l'espressione regolare
  return emailRegex.test(email);
}
