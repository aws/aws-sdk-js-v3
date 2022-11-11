!(function () {
  var guideName = document.createElement("meta");
  (guideName.name = "guide-name"), (guideName.content = "API Reference");

  var serviceName = document.createElement("meta");
  (serviceName.name = "service-name"), (serviceName.content = "AWS SDK for JavaScript v3");

  document.head.appendChild(guideName);
  document.head.appendChild(serviceName);

  var zone = document.createElement("div");
  zone.className += "container";
  zone.id = "awsdocs-legal-zone-copyright";
  zone.style.padding = "2rem";

  var footer = document.getElementsByTagName("footer");
  if (footer && footer.length >= 1) {
    footer[footer.length - 1].appendChild(zone);
  } else {
    document.body.appendChild(zone);
  }

  var boot = document.createElement("script");
  boot.src = "/assets/js/awsdocs-boot.js";
  boot.type = "text/javascript";
  document.head.appendChild(boot);
})();
