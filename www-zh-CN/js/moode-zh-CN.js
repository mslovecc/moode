/*
 * moOde WebUI 简体中文界面层
 * 仅作用于 www-zh-CN 副本；不修改原始 www。
 * 下拉框及其 option 内容刻意排除，避免改变设备/格式等程序值。
 */
(function () {
  'use strict';

  var dict = {
    'Configuration settings':'配置设置','Configuration':'配置','Preferences':'偏好设置',
    'Playback':'播放','Library':'音乐库','Audio':'音频','Network':'网络','System':'系统',
    'Renderers':'音频渲染器','Peripherals':'外围设备','MPD':'MPD','Multiroom':'多房间音频',
    'Clock radio':'定时播放','Input select':'输入选择','Radio Cover+':'电台封面+',
    'Overview':'概览','Your Privacy':'隐私保护','Release Information':'版本信息',
    'Platform Information':'平台信息','Quick Help':'快速帮助','Dashboard':'设备管理面板',
    'Bluetooth pairing':'蓝牙配对','Audio information':'音频信息','System information':'系统信息',
    'Power Options':'电源选项','Close':'关闭','Cancel':'取消','Confirm':'确认','Reject':'拒绝',
    'Back':'返回','Home':'主页','Menu':'菜单','Help':'帮助','Save':'保存','Apply':'应用',
    'Update':'更新','Refresh':'刷新','Reset':'重置','Scan':'扫描','Browse':'浏览',
    'Search':'搜索','search':'搜索','Advanced search':'高级搜索','Saved searches':'已保存的搜索',
    'Discover':'发现设备','Select all':'全选','Remove':'移除','Delete':'删除','Edit':'编辑',
    'Download':'下载','Upload':'上传','Restart':'重新启动','Shutdown':'关机','Reconnect':'重新连接',
    'Checking connection':'正在检查连接','System was restarted':'系统已重新启动',
    'System was shut down':'系统已关机','Update library':'更新音乐库','Regen Thumbs':'重新生成缩略图',
    'Refresh screen':'刷新屏幕','Play':'播放','Pause':'暂停','Stop':'停止','Next':'下一首',
    'Prev':'上一首','Previous':'上一首','Random':'随机播放','Repeat':'重复播放',
    'Add':'添加','Add next':'添加到下一首','Play next':'下一首播放','Clear/Play':'清空并播放',
    'Clear queue':'清空播放队列','Crop queue':'裁剪播放队列','Queue':'播放队列',
    'Queue info':'队列信息','Save Queue to playlist':'将队列保存为播放列表',
    'Add to playlist':'添加到播放列表','Show tracks':'显示曲目','Audio info':'音频信息',
    'Favorite':'收藏','Favorites':'收藏夹','Set Favorites name':'设置收藏夹名称',
    'Set for clock radio':'设为定时播放','Last track':'上一首曲目','Goto Folder':'转到文件夹',
    'Queue top':'移至队列顶部','Queue bottom':'移至队列底部','Consume':'播放后移除',
    'Single':'单曲模式','Receivers':'接收端','Play here':'在此设备播放',
    'Toggle CoverView':'切换封面视图','Record stream':'录制音频流',
    'Radio':'网络电台','Folder':'文件夹','Tag':'标签','Album':'专辑','Playlist':'播放列表',
    'Artist':'艺术家','Album Artist':'专辑艺术家','Title':'标题','Genre':'流派',
    'Composer':'作曲家','Conductor':'指挥','Performer':'演奏者','Work':'作品',
    'Date':'日期','Comment':'备注','File':'文件','Counts':'统计数量',
    'Audio Output':'音频输出','Output device':'输出设备','Volume type':'音量类型',
    'Volume':'音量','Volume Up':'增大音量','Volume Down':'减小音量',
    'Select from Pi HDMI/Headphone, I2S or USB audio devices.':'从 Raspberry Pi HDMI/耳机接口、I2S 或 USB 音频设备中选择。',
    'The list shows the ALSA card number and assigned audio device or "empty".':'列表显示 ALSA 声卡编号及对应的音频设备；未分配设备时显示为“empty”。',
    'The SCAN button refreshes the list to pick up newly connected USB audio devices.':'点击“扫描”可刷新列表，以识别新连接的 USB 音频设备。',
    'Volume type used by MPD.':'MPD 使用的音量控制类型。',
    'Overview':'概览','General':'常规','Appearance':'外观','Playback settings':'播放设置',
    'Music Library':'音乐库','Cover Art':'封面图片','CoverView':'封面视图',
    'Recently added':'最近添加','Sort order':'排序方式','Settings':'设置','Options':'选项',
    'Enable':'启用','Disable':'禁用','On':'开启','Off':'关闭','Yes':'是','No':'否',
    'Name':'名称','Description':'说明','Status':'状态','Information':'信息','Details':'详细信息',
    'Advanced':'高级','Basic':'基本','Default':'默认','Custom':'自定义','None':'无',
    'Enabled':'已启用','Disabled':'已禁用','Active':'活动','Inactive':'未活动',
    'Connected':'已连接','Disconnected':'未连接','Available':'可用','Unavailable':'不可用',
    'Loading':'正在加载','Please wait':'请稍候','Success':'成功','Error':'错误','Warning':'警告',
    'Are you sure?':'确定要继续吗？','Please confirm':'请确认','Operation completed':'操作已完成',
    'Invalid value':'无效值','Required':'必填项','This value is required.':'此项为必填项。',
    'This value seems to be invalid.':'此值似乎无效。',
    'This value should be a valid email.':'请输入有效的电子邮件地址。',
    'This value should be a valid url.':'请输入有效的 URL。',
    'This value should be a valid number.':'请输入有效数字。',
    'This value should be digits.':'此处只能输入数字。',
    'This value should be a valid date (YYYY-MM-DD).':'请输入有效日期（YYYY-MM-DD）。',
    'This value should be alphanumeric.':'请输入字母或数字。',
    'This value should not be null.':'此值不能为空。',
    'This value should not be blank.':'此项不能为空白。',
    'This value is too short. It should have %s characters or more.':'输入内容过短，至少需要 %s 个字符。',
    'This value is too long. It should have %s characters or less.':'输入内容过长，最多允许 %s 个字符。',
    'Invalid command arguments':'命令参数无效','Argument missing':'缺少参数',
    'The Playback screen includes the play queue (Queue), volume and time knobs, playback controls, cover art and metadata.':'播放页面包含播放队列、音量与时间旋钮、播放控制、专辑封面和媒体信息。',
    'The Library provides Radio, Folder, Tag, Album and Playlist views for browsing and selecting content and a Playbar for displaying song information and controlling playback.':'音乐库提供网络电台、文件夹、标签、专辑和播放列表视图，供您浏览和选择内容；播放栏用于显示曲目信息和控制播放。',
    'There are four main sections to moOde: Configuration, Preferences, Playback and Library.':'moOde 主要包含四个部分：配置、偏好设置、播放和音乐库。',
    'The Preferences screen is accessed via the Main Menu and provide settings for WebUI Appearance, Playback, Cover Art, Library and CoverView.':'通过主菜单进入偏好设置，可调整 WebUI 外观、播放、封面图片、音乐库和封面视图。',
    'The Configuration screens are accessed via the Main Menu and provide options for setting up the Music Library, configuring audio devices, defining network connections, enabling system services, connecting to peripheral devices, and activating 3rd party audio renderers.':'通过主菜单进入配置页面，可设置音乐库、配置音频设备、网络连接、系统服务、外围设备以及第三方音频渲染器。'
  };

  var skipTags = /^(SCRIPT|STYLE|NOSCRIPT|OPTION|SELECT|TEXTAREA|INPUT|CODE|PRE)$/i;
  var skipSelectors = [
    '#currentsong','#currentartist','#currentalbum','#ss-currentsong','#ss-currentartist',
    '#ss-currentalbum','#playqueue','#playqueue-list','.playqueue','.playhistory',
    '#coverart-url','#ss-coverart-url','.coverart','.album-art','.track-metadata',
    '[data-no-translate]'
  ].join(',');

  function excluded(node) {
    var el = node && (node.nodeType === 1 ? node : node.parentElement);
    if (!el) return true;
    if (el.closest && el.closest(skipSelectors)) return true;
    for (var p = el; p && p !== document.body; p = p.parentElement) {
      if (skipTags.test(p.tagName)) return true;
    }
    return false;
  }

  function translateText(node) {
    if (!node || node.nodeType !== 3 || excluded(node)) return;
    var raw = node.nodeValue;
    var trimmed = raw.trim();
    if (!trimmed || !Object.prototype.hasOwnProperty.call(dict, trimmed)) return;
    node.nodeValue = raw.replace(trimmed, dict[trimmed]);
  }

  function translateAttr(el, name) {
    if (!el || excluded(el)) return;
    var value = el.getAttribute(name);
    if (value && Object.prototype.hasOwnProperty.call(dict, value.trim())) {
      el.setAttribute(name, dict[value.trim()]);
    }
  }

  function scan(root) {
    if (!root) return;
    if (root.nodeType === 3) { translateText(root); return; }
    if (root.nodeType !== 1 && root !== document) return;
    if (root.nodeType === 1) {
      ['title','placeholder','aria-label'].forEach(function (a) { translateAttr(root, a); });
    }
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(translateText);
    if (root.querySelectorAll) {
      root.querySelectorAll('[title],[placeholder],[aria-label]').forEach(function (el) {
        ['title','placeholder','aria-label'].forEach(function (a) { translateAttr(el, a); });
      });
    }
  }

  function start() {
    document.documentElement.lang = 'zh-CN';
    scan(document.body);
    var observer = new MutationObserver(function (records) {
      records.forEach(function (record) {
        if (record.type === 'characterData') translateText(record.target);
        if (record.type === 'childList') record.addedNodes.forEach(function (n) { scan(n); });
        if (record.type === 'attributes') translateAttr(record.target, record.attributeName);
      });
    });
    observer.observe(document.body, {
      subtree: true, childList: true, characterData: true, attributes: true,
      attributeFilter: ['title','placeholder','aria-label']
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }
})();
