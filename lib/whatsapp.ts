export function whatsappLink(message: string, phone = '+919990918797'){
  const encoded = encodeURIComponent(message);
  const clean = phone.replace(/\D/g, '');
  return `https://wa.me/${clean}?text=${encoded}`;
}
