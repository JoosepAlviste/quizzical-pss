var primaryOS = '';

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
  $primaryButton.innerHTML = '<b>Download</b> for <b>' + os + '</b>';

  console.log($primaryButton, getDownloadPath(os));
  $primaryButton.href = getDownloadPath(os);

  if (os === 'Windows') {
    others = ['MacOS', 'Linux'];
  } else if (os === 'MacOS') {
    others = ['Windows', 'Linux'];
  } else if (os === 'Linux') {
    others = ['Windows', 'MacOS'];
  }

  document.querySelectorAll('.download__dropdown-item').forEach(function ($item, i) {
    $item.innerHTML = '<b>Download</b> for <b>' + others[i] + '</b>';
    $item.href = getDownloadPath(others[i]);
  });
}

function getDownloadPath(os) {
  if (os === 'MacOS') {
    return 'assets/releases/Quizzical.dmg';
  } else if (os === 'Windows') {
    return 'assets/releases/Quizzical Setup.exe';
  } else if (os === 'Linux') {
    return 'assets/releases/Quizzical.AppImage';
  }
}

document.addEventListener('DOMContentLoaded', function () {
  setDownloadLinks();
});
