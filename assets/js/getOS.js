function getOS() {
  // 1️⃣ Client Hints (Chrome / Edge)
  if (navigator.userAgentData?.platform) {
    return navigator.userAgentData.platform;
  }

  // 2️⃣ Fallback (iOS, Safari, Firefox)
  const ua = navigator.userAgent.toLowerCase();

  if (ua.includes("iphone") || ua.includes("ipad") || ua.includes("ipod")) {
    return "iOS";
  }
  if (ua.includes("android")) return "Android";
  if (ua.includes("windows")) return "Windows";
  if (ua.includes("mac os x")) return "macOS";
  if (ua.includes("linux")) return "Linux";

  return "Indefinido";
}

let OS = getOS()
console.log(OS)