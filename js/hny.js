function createBanner(msg) {
  var body = document.body;
  var banner = document.createElement('div');
  var message = document.createElement('p');
  var button = document.createElement('button');
  banner.id = 'banner';
  banner.setAttribute('style', 'position: fixed; bottom: 0; left: 0; right: 0; background: #790000; height: 80px; z-index: 9999; display: flex; justify-content: center; align-items: center; color: #fff; padding: 40px 90px; font-size: 18px');
  message.innerHTML = msg;
  button.innerHTML = '&times;';
  button.onclick = function () {
    removeBanner();
  };
  banner.append(message, button);
  if (body) {
    body.appendChild(banner);
  }
}

function removeBanner() {
  var banner = document.getElementById('banner');
  if (banner) {
    banner.remove();
  }
}

createBanner('Happy New Year! We are VERY sorry for this inconvenience but our National Holiday ( Lunar New Year ) is from Jan 30 to Feb 6 ( GMT+7 ). We will get back to you shortly. For any serious issue, please simply uninstall the app to avoid problems to your live site, then email to us at support@ordersify.com');
