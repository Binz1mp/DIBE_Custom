const optlist = [
  'newtab', 'defaultfont', 'checkip', 'hideblock',
  'blockmobile', 'nickid', 'pagination', 'darkmode',
  'refresh', 'refreshtime', 'isblockcategory'
];

function saveOptions() {
  const setting = {};
  for (let key of optlist) {
    if (key === 'refreshtime') {
      setting.refreshtime = document.getElementById(key).value;
      setting.isrefresh  = document.getElementById('refresh').checked;
    }
    else if (key === 'isblockcategory') {
      setting.isblockcategory   = document.getElementById('isblockcategory').checked;
      setting.blockcategoryList = document.getElementById('blockcategoryList').value.trim();
    }
    else {
      setting['is' + key] = document.getElementById(key).checked;
    }
  }

  chrome.storage.local.set(setting, () => {
    const status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(() => status.textContent = '', 750);
  });
}

function loadOptions() {
  chrome.storage.local.get(null, items => {
    for (let key of optlist) {
      if (key === 'refreshtime') {
        const chk = items.isrefresh === true;
        document.getElementById('refresh').checked = chk;
        const sel = document.getElementById('refreshtime');
        sel.style.display = chk ? 'inline-block' : 'none';
        if (chk && items.refreshtime) sel.value = items.refreshtime;
      }
      else if (key === 'isblockcategory') {
        const cb = document.getElementById('isblockcategory');
        const ta = document.getElementById('blockcategoryList');
        cb.checked  = items.isblockcategory === true;
        ta.value = items.blockcategoryList ?? "";
        ta.disabled = !cb.checked;
      }
      else {
        const el = document.getElementById(key);
        if ('is' + key in items && el) {
          el.checked = items['is' + key];
        }
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // 자동 갱신 select 토글
  document.getElementById('refresh').addEventListener('change', function() {
    document.getElementById('refreshtime')
      .style.display = this.checked ? 'inline-block' : 'none';
  });

  // 카테고리 차단 textarea 활성/비활성 토글
  document.getElementById('isblockcategory').addEventListener('change', function() {
    document.getElementById('blockcategoryList').disabled = !this.checked;
  });

  loadOptions();
  document.getElementById('save').addEventListener('click', saveOptions);
});