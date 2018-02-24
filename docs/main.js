var primaryOS = '';

var downloadLinks = {
  'MacOS': 'https://github.com/JoosepAlviste/quizzical/releases/download/v0.2.0/Quizzical-0.2.0.dmg',
  'Windows': 'https://github.com/JoosepAlviste/quizzical/releases/download/v0.2.0/Quizzical.Setup.0.2.0.exe',
  'Linux': 'https://github.com/JoosepAlviste/quizzical/releases/download/v0.2.0/quizzical-0.2.0-x86_64.AppImage',
};

function getOS() {
  var os = 'Unknown OS';
  if (navigator.appVersion.indexOf('Win') != -1) {
    os = 'Windows';
  } else if (navigator.appVersion.indexOf('Mac') != -1) {
    os = 'MacOS';
  } else if (navigator.appVersion.indexOf('Linux') != -1) {
    os = 'Linux';
  }

  if (os === 'Unknown OS') {
    os = 'Windows';
  }

  primaryOS = os;

  return os;
}

function setDownloadLinks() {
  var os = getOS();
  var others = [];

  var $primaryButton = document.getElementById('js-primary-os-button');
  $primaryButton.innerHTML = downloadLinkText(os);
  $primaryButton.href = getDownloadPath(os);

  if (os === 'Windows') {
    others = ['MacOS', 'Linux'];
  } else if (os === 'MacOS') {
    others = ['Windows', 'Linux'];
  } else if (os === 'Linux') {
    others = ['Windows', 'MacOS'];
  }

  document.querySelectorAll('.download__dropdown-item').forEach(function ($item, i) {
    $item.innerHTML = downloadLinkText(others[i]);
    $item.href = getDownloadPath(others[i]);
  });
}

function getDownloadPath(os) {
  return downloadLinks[os];
}

function downloadLinkText(os) {
  return '<b>Download</b> for <b>' + os + '</b>';
}

document.addEventListener('DOMContentLoaded', function () {
  setDownloadLinks();
});
