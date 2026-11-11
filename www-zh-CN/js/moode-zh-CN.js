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

    // Audio configuration (keep product and protocol names such as CamillaDSP, MPD, ALSA, I2S unchanged).
    'Audio Output':'音频输出','Select from Pi HDMI/Headphone, I2S or USB audio devices. These settings cannot be changed when outputting to a Bluetooth speaker or when Multiroom Sender or Receiver are On.':'可从 Raspberry Pi HDMI/耳机接口、I2S 或 USB 音频设备中选择。使用 Bluetooth 扬声器或启用多房间发送端/接收端时，无法更改这些设置。',
    'Output device':'输出设备','Volume type':'音量控制类型','Volume range':'音量范围','Device ready wait':'设备就绪等待时间',
    'Named I2S device':'指定的 I2S 设备','or DT overlay':'或 DT 覆盖层','Driver options':'驱动选项','Chip options':'芯片选项',
    'ALSA Options':'ALSA 选项','Max volume':'最大音量','Output mode':'输出模式','Loopback':'回环设备','Multiroom':'多房间音频',
    'MPD Options':'MPD 选项','MPD settings':'MPD 设置','Autoplay after start':'启动后自动播放','Metadata file':'元数据文件',
    'Auto-shuffle':'自动随机播放','Mode':'模式','Window size':'窗口大小','Tag filter':'标签筛选条件','Tag exclude':'排除标签',
    'Volume control':'音量控制','Volume step limit':'音量步进限制','Max MPD volume':'MPD 最大音量','Display dB volume':'显示 dB 音量',
    'MPD DSP':'MPD DSP','Crossfade (secs)':'淡入淡出时长（秒）','Crossfeed':'交叉馈音','Polarity inversion':'极性反转',
    'HTTP streaming':'HTTP 音频流','Streaming server':'流媒体服务器','Port':'端口','Encoder':'编码器','Local audio':'本地音频',
    'CoreDSP':'CoreDSP','General Purpose DSP':'通用 DSP','ALSA Equalizers':'ALSA 均衡器','Graphic EQ':'图形均衡器','Parametric EQ':'参数均衡器','EQ curve':'均衡器曲线',
    'Select from Pi HDMI/Headphone, I2S or USB audio devices.':'从 Raspberry Pi HDMI/耳机接口、I2S 或 USB 音频设备中选择。',
    'These settings cannot be changed when outputting to a Bluetooth speaker or when Multiroom Sender or Receiver are On.':'使用 Bluetooth 扬声器或启用多房间发送端/接收端时，无法更改这些设置。',
    'Volume type used by MPD.':'MPD 使用的音量控制类型。',
    'Audio device on-chip volume controller.':'音频设备上的硬件音量控制器。',
    'MPD software volume (32 bit float with dither).':'MPD 软件音量（32 位浮点运算并加入抖动）。',
    'Output 100% volume. Assumes a downstream volume control is used.':'以 100% 音量输出，默认由后级设备负责音量控制。',
    'Set volume to a low level before changing these options.':'更改这些选项前，请先将音量调低。',
    'This value represents the difference between the maximum loudness and background noise level. It is used to generate the volume curve which determines the loudness at each point on the CamillaDSP volume slider and moOde volume knob.':'此数值表示最大响度与背景噪声电平之间的差值。系统会据此生成音量曲线，用于确定 CamillaDSP 音量滑块和 moOde 音量旋钮在各个位置对应的响度。',
    'During start up, wait up to the specified number of minutes for the Output device to become ready.':'系统启动时，最多等待指定分钟数，直到输出设备就绪。',
    'After setting a device or overlay, reboot and then select the device from the Output device list.':'设置设备或覆盖层后，请重新启动系统，然后在“输出设备”列表中选择该设备。',
    'If enabled, Boss and MiniBOSS DAC operate in slave mode required by Kali reclocker.':'启用后，Boss 和 MiniBOSS DAC 将工作在 Kali 重时钟器所要求的从模式。',
    'If enabled, Kali MCLK is used and PLL for Piano 2.1 is disabled for best SQ.':'启用后将使用 Kali MCLK，并禁用 Piano 2.1 的 PLL，以获得更好的音质。',
    'This establishes the ALSA 0dB level when volume type is set to Software, Fixed or CamillaDSP, or when any Renderers are active. Alsamixer volume units (1 to 100) are used.':'当音量类型设为 Software、Fixed 或 CamillaDSP，或有音频渲染器运行时，此值用于设定 ALSA 的 0 dB 电平。使用 alsamixer 音量单位（1 至 100）。',
    'Default:':'默认：','Direct:':'直通：','IEC958:':'IEC958：',
    'ALSA "plughw" plugin which performs format conversions if needed to match audio device requirements.':'ALSA“plughw”插件；必要时会进行格式转换，以匹配音频设备的要求。',
    'ALSA "hw" plugin which does not perform format conversions. The audio device must accept the given format.':'ALSA“hw”插件，不执行格式转换。音频设备必须能够接受指定格式。',
    'ALSA "iec958" plugin which provides IEC958_SUBFRAME_LE format for HDMI audio.':'ALSA“iec958”插件，为 HDMI 音频提供 IEC958_SUBFRAME_LE 格式。',
    'These modes apply to MPD, Bluetooth (inbound), AirPlay, Spotify Connect, Squeezelite and the Equalizers.':'这些模式适用于 MPD、Bluetooth（输入）、AirPlay、Spotify Connect、Squeezelite 和均衡器。',
    'The Loopback device provides a copy of the PCM output stream that can be accessed by reading "hw:Loopback,1,0".':'回环设备会复制 PCM 输出音频流，可通过读取“hw:Loopback,1,0”访问。',
    'Loopback is not supported for CamillaDSP.':'CamillaDSP 不支持回环设备。',
    'Loopback requires > 44.1K for Pi-3 HDMI/Headphone (does not apply if Multiroom Sender is on).':'Raspberry Pi 3 的 HDMI/耳机接口使用回环设备时，采样率必须高于 44.1 kHz（启用多房间发送端时不受此限制）。',
    'Set up multiroom sender and receivers.':'设置多房间音频发送端和接收端。',
    'Music Player Daemon (MPD) is a flexible, powerful, server-side application for playing music and is the primary audio application in moOde. MPD settings including DSD, SoX resampling, audio buffers and others are configured via the EDIT button.':'Music Player Daemon（MPD）是一款灵活且功能强大的服务器端音乐播放程序，也是 moOde 的核心音频应用。DSD、SoX 重采样、音频缓冲区等 MPD 参数可通过“编辑”按钮进行配置。',
    'Start auto-shuffle random play if it was previously active or play last played item.':'如果此前启用了自动随机播放，则启动后继续随机播放；否则播放上次播放的项目。',
    'Maintain enhanced metadata for the currently playing song or station in the /var/local/www/currentsong.txt file. This file is updated within three seconds after any metadata updates on the UI.':'在 /var/local/www/currentsong.txt 文件中保存当前曲目或电台的扩展元数据。界面中的元数据更新后，该文件会在三秒内同步更新。',
    "When the last song in the Queue has finished playing, Auto-shuffle adds two randomly selected songs from the music library to the end of the Queue then repeats the process. This creates a continuous stream of music without growing the Queue and having two tracks enables MPD Crossfade to be used. NOTE: Auto-shuffle replaces MPD random play as the method for the 'Random' button.":"播放队列中的最后一首歌曲结束后，自动随机播放会从音乐库中随机选择两首歌曲添加到队列末尾，然后重复这一过程。这样可以持续播放音乐而不会使队列不断增长；队列中保留两首曲目也使 MPD 淡入淡出功能能够正常工作。注意：启用自动随机播放后，“随机播放”按钮将使用此功能，而不再使用 MPD 自身的随机播放。",
    'Play randomly selected track or whole album.':'随机播放选中的单首曲目或整张专辑。',
    'Sets the size of the "window" used for the shuffle algorithm. Lower numbers mean more frequent repeats, and higher numbers mean less frequent repeats. The default window size is 7.':'设置随机播放算法使用的“窗口”大小。数值越小，曲目重复越频繁；数值越大，重复越少。默认值为 7。',
    'String of TAG VALUE pairs that Auto-shuffle uses to select the tracks being shuffled. Only one occurrence of a given TAG is allowed. The filter is case insensitive and it performs a TAG contains VALUE substring match.':'用于自动随机播放选曲的 TAG VALUE 条件组合。每种 TAG 只能出现一次。筛选不区分大小写，并按 TAG 是否包含 VALUE 子字符串进行匹配。',
    'String of TAG VALUE pairs that Auto-shuffle uses to exclude the tracks being shuffled. Only one occurrence of a given TAG is allowed. The filter is case insensitive and it performs a TAG contains VALUE substring match.':'用于自动随机播放排除曲目的 TAG VALUE 条件组合。每种 TAG 只能出现一次。筛选不区分大小写，并按 TAG 是否包含 VALUE 子字符串进行匹配。',
    'Sets the maximum amount the volume knob will advance when it\'s clicked ahead of its current position.':'设置点击音量旋钮向上调节时，每次允许增加的最大步进值。',
    'Establishes the highest Volume Knob level that can be set.':'设置音量旋钮允许达到的最高音量。',
    'Display dB volume next to the 0-100 level in the volume knob.':'在音量旋钮的 0–100 数值旁显示 dB 音量。',
    'Note that Core DSP, Crossfeed, and Polarity inversion are mutually exclusive. Enabling one will disable the others.':'请注意，CoreDSP、交叉馈音和极性反转三者互斥。启用其中一项时，其他项目将自动停用。',
    'The MPD Audio buffer must be large enough to perform the requested number of seconds of crossfade for a given audio format. Set to 0 to disable crossfade.':'MPD 音频缓冲区必须足够大，才能针对指定音频格式完成设定时长的淡入淡出。设为 0 可关闭此功能。',
    'Change the waveform on each channel from +/- to -/+.':'将每个声道的波形极性从 +/- 反转为 -/+。',
    'Provide MPD output as an HTTP stream on the designated port.':'通过指定端口将 MPD 音频输出为 HTTP 音频流。',
    'Default port is 8000. Port number range is 8000 - 9000.':'默认端口为 8000，允许的端口范围为 8000–9000。',
    'Encode the stream using either FLAC at compression level 0 (fastest, least compression) or LAME (MP3) at 320 kbps.':'音频流可使用 FLAC 进行编码（压缩等级 0，速度最快、压缩率最低），或使用 LAME（MP3）以 320 kbps 编码。',
    'Turn off to disable output to the local audio device.':'关闭后将停止向本地音频设备输出声音。',
    'CoreDSP supports MPD, Bluetooth, AirPlay, Spotify Connect and Squeezelite renderers. It is not available if Multiroom Sender or Receiver are On. Note that CoreDSP and MPD Crossfeed and Polarity inversion are mutually exclusive. Enabling one will disable the others.':'CoreDSP 支持 MPD、Bluetooth、AirPlay、Spotify Connect 和 Squeezelite 音频渲染器。启用多房间发送端或接收端时，CoreDSP 不可用。请注意，CoreDSP、MPD 交叉馈音和极性反转三者互斥；启用其中一项时，其他项目将自动停用。',
    'CamillaDSP is a general purpose Digital Signal Processing engine for routing and filtering sound. It can be used for building crossovers for active speakers, performing room correction, equalization or volume control. CamillaDSP is maintained by Henrik Enquist. Integration into moOde was done by @bitlab.':'CamillaDSP 是一款通用数字信号处理引擎，可用于音频路由和滤波，也可用于有源扬声器分频、房间声学校正、均衡和音量控制。CamillaDSP 由 Henrik Enquist 维护，并由 @bitlab 集成到 moOde 中。',
    'Feature summary:':'功能概要：','IIR filters (BiQuad)':'IIR 滤波器（BiQuad）','FIR filters (Convolution via FFT)':'FIR 滤波器（通过 FFT 卷积）',
    'Built-in sample rate converter':'内置采样率转换器','Filters can be chained freely':'支持自由串联滤波器','Flexible routing':'灵活的音频路由',
    'Simple YAML configuration':'简洁的 YAML 配置','All calculations done with 64-bit floats':'所有计算均使用 64 位浮点数',
    'ARM Neon 64-bit instruction set is used':'使用 ARM Neon 64 位指令集','Pipeline editor with expert mode':'带专家模式的处理管线编辑器',
    'Configurations can be managed at the CamillaDSP settings page.':'可在 CamillaDSP 设置页面管理配置。',
    'Note: Peppy display cannot be turned on if playing to a Bluetooth speaker with Graphic or Parametric EQ on.':'注意：播放到 Bluetooth 扬声器时，如果启用了图形均衡器或参数均衡器，则无法开启 Peppy 显示屏。',
    'A classic octave-band, constant-Q, second-order filter design. Frequency bands centered above Nyquist are automatically disabled. This EQ uses the Eq10X2 component of the C Audio Plugin Suite (CAPS) suite of DSP programs written by Tim Goetze.':'这是一种经典的倍频程频段、恒定 Q 值二阶滤波器设计。中心频率高于奈奎斯特频率的频段会自动禁用。此均衡器使用 Tim Goetze 编写的 C Audio Plugin Suite（CAPS）DSP 程序套件中的 Eq10X2 组件。',
    'Twelve Mitra-Regalia peaking equaliser filters in series; a vector arithmetic re-implementation of Fons Adriaensens "Parametric1" equaliser[fafil] with minor differences. Parallelisation of the serial filter organisation causes the output to lag by three samples. This EQ uses the @bitlab eqfa12p plugin based on the eqfa4p plugin in the C Audio Plugin Suite (CAPS) suite of DSP programs written by Tim Goetze.':'由十二个 Mitra-Regalia 峰值均衡滤波器串联组成，是 Fons Adriaensens“Parametric1”均衡器 [fafil] 的向量运算重实现版本，存在少量差异。串联滤波器结构的并行化会使输出延迟三个采样点。此均衡器使用 @bitlab 的 eqfa12p 插件，该插件基于 Tim Goetze 编写的 C Audio Plugin Suite（CAPS）DSP 程序套件中的 eqfa4p 插件。',
    'Card is empty.':'声卡为空。','Device is reserved and cannot be selected for output.':'该设备为保留设备，不能选作音频输出。',
    'MPD has been restarted.':'MPD 已重新启动。','Setting updated. Turn Random play back on to make this setting effective.':'设置已更新。请重新开启随机播放，使此设置生效。',
    'To run Peppy when Crossfeed, Graphic or Parametric EQ is on, set ALSA output mode to Direct or IEC958.':'启用交叉馈音、图形均衡器或参数均衡器时，如需运行 Peppy，请将 ALSA 输出模式设为 Direct 或 IEC958。',
    'When Peppy is on, ALSA output mode cannot be "Default".':'启用 Peppy 时，ALSA 输出模式不能设为“Default”。'

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
    var normalized = trimmed.replace(/\\s+/g, ' ');
    if (!normalized || !Object.prototype.hasOwnProperty.call(dict, normalized)) return;
    node.nodeValue = raw.replace(trimmed, dict[normalized]);
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
