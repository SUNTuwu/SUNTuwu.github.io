'use strict';

/* ---------- 页面文案和素材，改内容只需要改这里 ---------- */
const CONTENT = {
  heroVideos: ['media/sable-teachers.mp4', 'media/rec-site-single.mp4', 'media/rec-promo.mp4'],
  heroVideosPhone: ['media/sable-teachers.mp4', 'media/rec-site-single.mp4', 'media/rec-promo.mp4'],

  facets: [
    { cn: '现役 RMer', thumb: 'media/facet-rm.jpg',
      text: '港科大 RM 战队算法组，2026 赛季哨兵研发代表，现在主要在搭仿真和 2027 赛季的哨兵，并做自瞄联调。上个赛季主要负责导航和自瞄。' },
    { cn: '仿真 + RL', thumb: 'media/sim-7.jpg',
      text: '目前主要开发基于 MuJoCo 的 RM 赛场和哨兵仿真框架。四足宠物项目正在进行强化学习训练，六足机器人已完成训练和实机移植。' },
    { cn: '硬件 DIY', thumb: 'media/facet-hardware.jpg',
      text: '设计过微型电机驱动板和双目 AR 驱动板，使用逻辑分析仪分析 LT8619C 的初始化时序，并开发 PCB 图像处理与走线提取工具。' },
    { cn: '创作者', thumb: 'media/art-1.jpg',
      text: '课余制作 3D 模型、插画和动画，也拍摄机器人实物与比赛现场。作品曾发布在 B 站和小红书，近期因 RM 比赛暂停更新。' },
  ],

  flags: [
    { en: 'NAVIGATION', cn: '导航 + 自瞄', to: 'rm', tone: '' },
    { en: 'SIMULATION', cn: 'MuJoCo 仿真', to: 'tech', tone: 'alt' },
    { en: 'RL', cn: '强化学习', to: 'tech', tone: '' },
    { en: 'HARDWARE', cn: 'PCB + 逆向', to: 'lab', tone: 'alt2' },
    { en: '3D / ART', cn: '建模与绘画', to: 'art', tone: 'alt' },
  ],

  /* 02 RM 战队工作：state 是状态，repo 是对应的仓库名 */
  rm: [
    { state: '当前重点', repo: 'sentry-sim / mujoco-sim-core', title: 'MuJoCo 赛场仿真框架',
      text: '服务器推进物理仿真，按仿真时间输出相机画面。浏览器接收模型与状态，也能用 Filament 在本地绘制赛场。' },
    { state: '进行中', repo: 'RM2027-sentry-ws', title: 'RM2027 哨兵框架搭建',
      text: '实机和仿真共用一套哨兵软件框架，统一管理串口通信、定位、导航、决策和视觉模块，方便把仿真中验证过的模块直接移植到实机。' },
    { state: '正在推进', repo: 'Custom-client', title: '自定义客户端',
      text: '部署开源自定义客户端，并进行框架重构和二次开发。' },
    { state: '2027 赛季计划', title: '雷达站',
      text: '预适配新装甲板，训练车辆识别模型。' },
    { state: '2026 赛季', repo: 'RM2026-omni-cvx-mpc-controller', title: '全向底盘导航 MPC',
      text: '用 CVXPY 建立全向底盘模型，生成求解器代码，再把初版控制器接入 Nav2。' },
    { state: '2026 - 2027', repo: 'RM2027-RV / sentry-vision-plugin', title: '自瞄',
      text: '26 赛季接入两路侧向相机，整理图像队列、绘制线程和坐标变换，并重写海康相机 ROS 2 驱动。' },
  ],
  rmPast: '<b>2026 年 7 月 · 赛季复盘</b>作为 26 赛季哨兵研发代表，我在赛后反思了算法组成员参与哨兵开发时遇到的壁垒。因此，我把 27 赛季的工作重点放在哨兵框架搭建和仿真上，方便队里联调和实机移植。',

  /* 右侧卡片：比赛照片和获奖证书。cap 只用在大图说明里；
     直播数据和战队合影是同一张上下拼图，最后一行左右各裁一半 */
  rmPhotos: [
    { src: 'media/rm-field-debug.jpg', cap: '赛场调试', pos: '50% 40%' },
    { src: 'media/rm-me-sentry.jpg', cap: '和哨兵一起候场', pos: '70% 50%' },
    { src: 'media/rm-sentry-stand.jpg', cap: '2026 赛季哨兵', pos: '50% 55%' },
    { src: 'media/rm-broadcast-team.jpg', cap: '赛事直播数据', pos: '50% 10%' },
    { src: 'media/rm-broadcast-team.jpg', cap: '战队合影', pos: '50% 92%' },
  ],
  awards: [
    { title: '全国赛三等奖', note: '2026 超级对抗赛', src: 'media/rm-award-national.jpg' },
    { title: '北部赛区一等奖', note: '2026 超级对抗赛', src: 'media/rm-award-north.jpg' },
    { title: '3v3 甲级二等奖', note: '2026 高校联盟赛 · 安徽站', src: 'media/rm-award-anhui.jpg' },
  ],

  tech: [
    { id: 'sable', title: '强化学习四足宠物', short: '四足宠物', rail: 'SABLE', titleLong: '强化学习四足宠物 SABLE', en: 'RL QUADRUPED PET', state: '训练中', date: '近期',
      cover: { type: 'image', src: 'media/sable-cover.jpg' },
      desc: '在小体积约束下同步迭代机械结构和强化学习策略。通过仿真训练检查步态表现，分析策略训练与关节结构、力矩、速度和活动范围对运动的限制，据此调整硬件设计。',
      fields: [['技术', 'MuJoCo / 强化学习'], ['方法', '机械设计与 RL 同步迭代'], ['现在', '基础步态已能稳定存活，偏航和打滑待解决'], ['方向', '智能宠物和情感陪伴']],
      media: [
        /* cap 是标题，desc 是一句说明，显示在画面左下角 */
        { type: 'video', src: 'media/sable-teachers.mp4', cap: '九种教师步态同屏', thumbAt: 8,
          desc: '展示九种教师步态，目前正在进行策略蒸馏。' },
        { type: 'video', src: 'media/sable-training-six-views.mp4', cap: '六种运动任务训练演示', thumbAt: 1,
          desc: '分屏展示前进、后退、横移等六种运动任务及各自的训练曲线。' },
        { type: 'video', src: 'media/sable-retargeted-gaits.mp4', cap: '重定向步态展示', thumbAt: 1,
          desc: '展示重定向后的四足模型步态与关节运动。' },
        { type: 'image', src: 'media/sable-cover.jpg', cap: '形象概念',
          desc: '以鼬科动物为外形原型，面向陪伴用途设计小型四足机器人。' },
        { type: 'image', src: 'media/sable-sketch.jpg', cap: '概念手稿',
          desc: '记录四足宠物的外形构想与身体比例。' },
        { type: 'image', src: 'media/sable-leg.png', cap: '腿部结构模型',
          desc: '腿部结构模型，展示关节位置、连杆布局与尺寸标注。' },
        { type: 'image', src: 'media/sable-actuator-comparison.jpg', cap: '腿部机构与电机实物',
          desc: '腿部机构与电机实物尺寸对照。' },
        { type: 'image', src: 'media/sable-linear-actuators.jpg', cap: '测试中的步进电机',
          desc: '用于项目测试的多款步进电机。' },
        { type: 'video', src: 'media/sable-early-joint-length-test.mp4', cap: '早期关节长度测试', thumbAt: 1,
          desc: '在 MuJoCo 中测试关节长度比例，记录简化四足模型从站立到失稳的过程。' },
      ] },
    { id: 'sim', title: 'RM 赛场仿真', short: '赛场仿真', rail: 'SIMULATION', titleLong: 'RM 赛场仿真框架', en: 'RM ARENA SIMULATION', state: '研发中', date: '2026.11',
      cover: { type: 'image', src: 'media/sim-7.jpg' },
      desc: '基于 MuJoCo 集成赛场、机器人和传感器仿真。服务端推进物理状态，Filament 根据状态快照生成相机图像，浏览器独立渲染交互画面。目前已将同一套灯光效果接入 Blender，用于场景编辑时与服务端画面对照。',
      fields: [['物理与接口', 'MuJoCo / ROS 2 / WebSocket'], ['11 月进展', '已对比 Blender 本地预览与服务端输出。红、蓝正视与红色斜视三组画面中，8 位像素值最大相差 2 级。'], ['进行中', '继续检查场景网格和蓝色灯光映射']],
      media: [
        { type: 'video', src: 'media/sim-rune-preview.mp4', cap: '能量机关灯光预览', thumbAt: 3,
          desc: '蓝色能量机关转动时的灯带与环形图案渲染效果。' },
        { type: 'video', src: 'media/sim-1.mp4', cap: '自瞄视角：移动与射击仿真', thumbAt: 3,
          desc: '展示机器人移动和射击时的自瞄相机视角，并非操作手视角。' },
        { type: 'video', src: 'media/sim-2.mp4', cap: '赛场场景浏览', thumbAt: 1,
          desc: '通过视角移动展示仿真赛场的场地结构与灯光。' },
        { type: 'video', src: 'media/sim-nav.mp4', cap: '哨兵导航仿真', thumbAt: 12,
          desc: '左上是赛场俯视地图，主画面展示 RoboMaster 2026 赛场中的哨兵导航仿真，目前仍在推进中。' },
        { type: 'video', src: 'media/sim-3.mp4', cap: '赛场仿真画面', thumbAt: 2,
          desc: '展示赛场模型、场内视角与灯光效果。' },
        { type: 'video', src: 'media/sim-6.mp4', cap: '高斯泼溅测试', thumbAt: 1,
          desc: '高斯泼溅（Gaussian Splatting）的初步测试画面。' },
        { type: 'image', src: 'media/sim-architecture.png', cap: '仿真架构与数据流',
          desc: 'MuJoCo 推进物理仿真，传感器插件输出 IMU、激光雷达和相机数据。浏览器通过 WebSocket 接收模型与状态，用 Filament 绘制赛场。' },
        { type: 'image', src: 'media/sim-server-browser.png', cap: '服务端相机与浏览器预览',
          desc: '相机按仿真时间生成 RGB 图像，通过 ROS 或共享内存发布。浏览器接收模型和后续状态更新，单独绘制交互画面。' },
        { type: 'image', src: 'media/sim-rviz-costmap.jpg', cap: 'RViz 中的点云与全局代价地图',
          desc: '在 Nav2 全局代价地图上叠加赛场点云，检查障碍物轮廓与地图边界。' },
        { type: 'image', src: 'media/sim-4.jpg', cap: '赛场模型总览' },
        { type: 'image', src: 'media/sim-5.jpg', cap: '自研实时灯光合成',
          desc: '展示自研灯光合成器对装甲板灯条与数字区域的显示效果。' },
        { type: 'image', src: 'media/sim-lighting-results.png', cap: '赛场灯光渲染对比',
          desc: '同一赛场中，近处和远处的灯条在橙光、蓝光下呈现出不同的亮度和光晕。' },
        { type: 'image', src: 'media/sim-compositor-nodes.png', cap: 'Blender 灯光合成节点',
          desc: '各颜色通道的处理分支与最终画面合成流程。' },
        { type: 'image', src: 'media/sim-compositing-notes.png', cap: '灯光合成笔记',
          desc: '在一张底图上分别提取红、绿、蓝灯条，为各通道生成辉光，再与背景合成。' },
        { type: 'image', src: 'media/sim-lighting-process.png', cap: '灯条轮廓与光晕处理',
          desc: '上图记录远处灯条的亮度补偿、高斯光晕叠加和 Gamma 调整，下图展开灯条轮廓与发光中心的处理节点。' },
        { type: 'image', src: 'media/sim-7.jpg', cap: '灯光渲染效果' },
      ] },
    { id: 'hex', title: 'RL 仿生六足蜘蛛', short: '六足蜘蛛', rail: 'HEXAPOD', titleLong: 'RL 仿生六足蜘蛛机器人', en: 'RL HEXAPOD SPIDER', state: '已完成', done: true, date: '2025.04 - 2025.06',
      cover: { type: 'image', src: 'media/hex-1.jpg' },
      desc: '独立完成机械设计、嵌入式代码、RL 训练和 sim2real。机械设计重点是紧凑收纳与腿部活动范围，通过腿部构型和关节布局，使六条腿收拢后贴近机身，展开后保留较大的活动范围。RL 部分基于开源框架，针对六足结构进行二次开发和训练。照片为本人拍摄。',
      fields: [['时间', '2025 年 4 - 6 月'], ['职责', '机械设计 / 嵌入式 / RL 训练 / sim2real'], ['结构', '碳板主体 / 20 路舵机'], ['RL', '开源框架二次开发和训练']],
      media: [
        { type: 'image', src: 'media/hex-1.jpg', cap: '收拢状态 · 正面',
          desc: '六条腿收拢至机身两侧，展示紧凑的收纳形态。' },
        { type: 'image', src: 'media/hex-5.jpg', cap: '展开状态 · 正面',
          desc: '实机腿部展开后的正面照片。' },
        { type: 'video', src: 'media/hex-2.mp4', cap: '六足机器人强化学习训练', thumbAt: 1,
          desc: '展示六足机器人在仿真环境中的步态训练画面。' },
        { type: 'video', src: 'media/hex-3.mp4', cap: '实机行走测试', thumbAt: 1,
          desc: '六足机器人在地面上的行走测试记录。' },
        { type: 'image', src: 'media/hex-4.jpg', cap: '整机模型预览',
          desc: '六足机器人的整机模型，全部机械设计与建模由本人负责。' },
        { type: 'image', src: 'media/hex-6.jpg', cap: '展开状态 · 侧前方',
          desc: '从侧前方展示实机的腿部展开形态。' },
        { type: 'image', src: 'media/hex-7.jpg', cap: '收拢状态 · 侧前方',
          desc: '从侧前方展示腿部收拢后与机身的相对位置。' },
        { type: 'image', src: 'media/hex-8.jpg', cap: '收拢状态 · 俯视',
          desc: '从上方展示收拢后的腿部与机身布局。' },
        { type: 'image', src: 'media/hex-9.jpg', cap: '展开状态 · 俯视',
          desc: '实机展开后的整体布局。' },
        { type: 'image', src: 'media/hex-10.jpg', cap: '机身正面特写',
          desc: '展示机身前部、接线与两侧腿部结构。' },
        { type: 'image', src: 'media/hex-13.jpg', cap: '收拢状态 · 局部',
          desc: '腿部收拢后的局部结构与舵机布置。' },
        { type: 'image', src: 'media/hex-14.jpg', cap: '机身顶部特写',
          desc: '展示顶部气瓶、接线及安装位置。' },
        { type: 'image', src: 'media/hex-15.jpg', cap: '收拢状态 CAD 模型',
          desc: '展示腿部收拢后的整机布局与尺寸测量。' },
        { type: 'image', src: 'media/hex-16.jpg', cap: '舵机布局 CAD 模型',
          desc: '展示舵机、机身支架及关节之间的位置关系。' },
        { type: 'image', src: 'media/hex-20.jpg', cap: '腿部结构 · 侧面',
          desc: '实机腿部关节与舵机布置的侧面照片。' },
        { type: 'image', src: 'media/hex-3.jpg', cap: '实机悬挂展示',
          desc: '实机在竖直方向悬挂时的展示照片。' },
      ] },
    { id: 'arm', title: '机械臂外壳设计', short: '机械臂外壳', rail: 'ROBOT ARM', titleLong: '机械臂外壳设计', en: 'ROBOT ARM SHELL', state: '打样中', date: '2026.09 -',
      cover: { type: 'image', src: 'media/arm-8-cover.jpg' },
      desc: '使用 SolidWorks 进行机械臂的 ID 设计与外壳结构建模，并开展 FDM 打样测试。',
      fields: [['时间', '2026 年 9 月起'], ['工具', 'SolidWorks'], ['范围', 'ID 设计 / 外壳结构 / 制造工艺'], ['现在', 'FDM 打样测试']],
      media: [
        { type: 'image', src: 'media/arm-8.jpg', cap: '整体外观预览',
          desc: '展示机械臂外壳的整体造型与关节连接处。' },
        { type: 'image', src: 'media/arm-1.jpg', cap: '整体外观预览',
          desc: '展示机械臂展开姿态下的外壳比例与轮廓。' },
        { type: 'image', src: 'media/arm-2.jpg', cap: '臂段外观预览',
          desc: '展示臂段外壳的侧面轮廓与配色。' },
        { type: 'image', src: 'media/arm-3.jpg', cap: '关节外观特写',
          desc: '展示关节周围的外壳曲面与臂段过渡。' },
        { type: 'image', src: 'media/arm-4.jpg', cap: '臂段模型细节',
          desc: '展示臂段外壳及端部关节的模型细节。' },
        { type: 'image', src: 'media/arm-5.jpg', cap: '臂段与关节外观预览',
          desc: '展示臂段外壳、两端关节及表面造型。' },
        { type: 'image', src: 'media/arm-6.jpg', cap: '臂段侧面预览',
          desc: '从侧面展示外壳轮廓、开口与关节连接处。' },
        { type: 'image', src: 'media/arm-7-trimmed.png', cap: '关节外观预览',
          desc: '展示关节圆形端盖与相邻外壳的曲面过渡。' },
        { type: 'image', src: 'media/arm-9.jpg', cap: '透明外壳模型预览',
          desc: '通过透明显示查看外壳与内部结构的位置关系。' },
        { type: 'image', src: 'media/arm-10.jpg', cap: '整体姿态预览',
          desc: '展示机械臂另一姿态下的整体外观。' },
        { type: 'image', src: 'media/arm-11.jpg', cap: '关节组件实拍',
          desc: '手持关节组件的局部照片。' },
        { type: 'image', src: 'media/arm-12.jpg', cap: '外壳打样实拍',
          desc: '手持臂段外壳样件，展示实物尺寸与外形。' },
      ] },
  ],

  /* 小项目：底部菜单一个项目一张封面（cover 是 items 的序号），项目内可以切换多张 */
  /* link 会显示在说明下面；技术向在前，艺术向在后 */
  lab: [
    { title: 'LT8619C 双目 AR', tag: '硬件', desc: '基于 LT8619C 驱动 ECX335S 的双目 AR 项目，展示结构模型、驱动板设计与实物。', cover: 0, items: [
      { type: 'image', src: 'media/ar-cad.jpg', note: '眼镜模组 CAD' },
      { type: 'image', src: 'media/ar-render.jpg', note: '驱动板 3D 预览' },
      { type: 'image', src: 'media/ar-layout.jpg', note: 'PCB 布线' },
      { type: 'image', src: 'media/ar-board-outline.jpg', note: 'ECX335 驱动板外形与尺寸' },
      { type: 'image', src: 'media/ar-layout-chip.jpg', note: 'LT8619C 芯片周围的引脚走线' },
      { type: 'image', src: 'media/ar-layout-power.jpg', note: '驱动板电源走线与铺铜' },
      { type: 'image', src: 'media/ar-photo.jpg', note: '驱动板实物' },
      { type: 'image', src: 'media/ar-board-closeup.jpg', note: '驱动板焊接细节' },
      { type: 'image', src: 'media/ar-flex-layout.jpg', note: '柔性电路板布线' },
      { type: 'image', src: 'media/ar-display-test.jpg', note: '微型显示屏点亮测试' },
    ] },
    { title: '微型电机驱动板', tag: '硬件', desc: '微型闭环直流电机驱动板，展示 PCB 设计与实物。', cover: 1, items: [
      { type: 'image', src: 'media/motor-render.jpg', note: 'PCB 3D 预览' },
      { type: 'image', src: 'media/motor-hand.jpg', note: '装到电机上的实物' },
      { type: 'image', src: 'media/motor-encoder-assembly.jpg', note: '磁编码器与电机驱动板装配图' },
      { type: 'image', src: 'media/motor-closeup.jpg', note: '实物细节' },
    ] },
    { title: '高功率密度双通道 DC-DC 电源板', tag: '硬件', desc: '2024 年设计的 30 × 20 mm 双通道电源板。当时对 SW（开关节点）走线宽度考虑不足，走线过细，未达到预期的 5 A 设计目标。', cover: 0, items: [
      { type: 'image', src: 'media/dual-dcdc.jpg', note: 'PCB 布局与尺寸对照' },
    ] },
    { title: 'IMU 鱼眼「0 延迟」图传', tag: '实时图像处理', desc: '通过 IMU 姿态外推和鱼眼重投影补偿图传中的旋转延迟。在两帧视频之间，使用 1 kHz IMU 外推显示时刻的朝向，通过 Vulkan 对上一帧鱼眼图像重投影并裁出 90° 视野，补偿采集到显示期间的旋转。', cover: 0, items: [
      { type: 'video', src: 'media/imu-fisheye-demo.mp4', note: '手持转动测试 · 原始鱼眼与补偿画面对照' },
    ] },
    { title: 'Vtuber 虚拟形象管线', tag: '软件', desc: '开发 Blender 插件，实现真人视频到虚拟形象的处理流程。通过 DirectML 运行 DWPose 进行姿态估计，使用 iPhone Record3D 采集 RGB-D 数据，进行头部替换和卡通渲染预览。', cover: 0, items: [
      { type: 'video', src: 'media/vtuber-demo.mp4', note: '管线演示' },
      { type: 'image', src: 'media/vtuber-rgbd-tests.jpg', note: '早期算法迭代 · RGB-D 语义分割与衣领边界测试' },
      { type: 'image', src: 'media/vtuber-hand-tests.jpg', note: '早期算法迭代 · YOLO 与 DeepLab 手部分割对比' },
    ] },
    { title: 'PCB_Extractor 抄板工具', tag: '软件', desc: '基于 PySide6 和 OpenCV 开发 PCB 抄板工具，支持多层图像配准、Lab 空间 K-means 铜皮二值化、手动修补、铜皮孤岛识别和走线中心路径导出。', cover: 3, items: [
      { type: 'image', src: 'media/pcb-front.jpg', note: '板子正面' },
      { type: 'image', src: 'media/pcb-layer-detail.jpg', note: '板层局部图像' },
      { type: 'image', src: 'media/pcb-mask-detail.png', note: '焊盘与走线二值图' },
      { type: 'image', src: 'media/pcb-regions.png', note: '铜皮连通区域着色' },
    ] },
    { title: 'LT8619C 逻辑分析仪逆向', tag: '逆向', desc: '抓取驱动板上电时的 I²C 和 SPI 波形，对照解码结果梳理 LT8619C 的配置顺序。', cover: 0, items: [
      { type: 'image', src: 'media/lt8619c-capture.png', note: '多通道逻辑分析仪抓包' },
      { type: 'image', src: 'media/lt8619c-timing.png', note: '对照不同通道的时序' },
      { type: 'image', src: 'media/lt8619c-packets.png', note: '解码后的数据片段' },
      { type: 'image', src: 'media/ar-display-test.jpg', note: '微型显示屏点亮测试' },
    ] },
    { title: '三摩擦发机', tag: '机械', desc: '三摩擦发机的机械结构模型。', cover: 0, items: [
      { type: 'image', src: 'media/triple-friction-launcher.png', note: '结构模型' },
    ] },
    { title: '乱搞的乒乓球小车', tag: '机械', desc: '2024 年 11 月完成。', cover: 0, items: [
      { type: 'image', src: 'media/cart-photo.jpg', note: '小车实物' },
      { type: 'video', src: 'media/cart-demo.mp4', note: '小车实拍视频' },
      { type: 'image', src: 'media/cart-outdoor.jpg', note: '户外实拍' },
      { type: 'image', src: 'media/cart-assembly.jpg', note: 'SolidWorks 整车装配' },
      { type: 'image', src: 'media/cart-upper.jpg', note: '云台模型' },
      { type: 'image', src: 'media/cart-section.jpg', note: '云台与滑环剖面' },
    ] },
    { title: '3D 打印可变形名片', tag: '3D 打印', desc: '设计可折叠为手机支架的 3D 打印名片，模型已发布至 MakerWorld。', cover: 0,
      link: { href: 'https://makerworld.com/zh/models/1128870-foldable-business-card-and-phone-stand#profileId-1128739', text: 'MakerWorld 模型页' }, items: [
      { type: 'image', src: 'media/card-personal.jpg', note: '实物' },
    ] },
    { title: '游戏角色关键帧动画（K 帧）', tag: '动画', desc: '2024 年 9 月制作。', cover: 0, items: [
      { type: 'video', src: 'media/character-keyframes.mp4', note: '角色动作演示' },
    ] },
    { title: '骰子动画', tag: '动画', desc: '和港科 UP 主合作的片头动画。', cover: 0, items: [
      { type: 'video', src: 'media/dice.mp4', note: '合作片头' },
    ] },
    { title: 'RM 战队文创', tag: '设计', desc: '为 RM 战队设计工程机器人图案和战队名片。', cover: 0, items: [
      { type: 'image', src: 'media/merch-engineer.jpg', note: '工程机器人图案' },
      { type: 'image', src: 'media/merch-process.jpg', note: '图案模型预览' },
      { type: 'video', src: 'media/card-enterprize.mp4', note: 'ENTERPRIZE 名片展示' },
      { type: 'video', src: 'media/card-rm.mp4', note: 'RM 战队名片实拍' },
    ] },
  ],
  labAlso: '见 <a href="https://xhslink.cn/o/3qZbS1aUIce" target="_blank" rel="noopener">小红书</a>、<a href="https://space.bilibili.com/177960253" target="_blank" rel="noopener">B站</a>，还做过 cosplay 道具设计、自研电磁抬笔写字机（高中）、3D 打印机（高中）等。',

  art: {
    /* year 显示在说明前面；href 是点击作品后新开的页面（不加提示） */
    draw: { cn: '绘画', items: [
      { src: 'media/art-1.jpg', year: '2025.05', cap: '委托插画' },
      { src: 'media/art-2.jpg', year: '2026.08', cap: '线稿' },
      { src: 'media/art-2026-03.jpg', year: '2026.03', cap: '委托插画' },
      { src: 'media/art-3.jpg', year: '2023.08', cap: '委托插画' },
      { src: 'media/art-4.jpg', year: '2021.06', cap: '插画', href: 'https://b23.tv/iGg545A' },
      { src: 'media/art-5.jpg', year: '2026.07', cap: '线稿' },
      { src: 'media/art-6.jpg', year: '2024.02', cap: '3D avatar 创建和绑骨' },
      { src: 'media/art-7.jpg', year: '2025.12', cap: 'MC 皮肤建模、绑骨和导入' },
      { src: 'media/art-mc-sunset.jpg', cap: 'MC 角色展示 / 日落' },
      { src: 'media/art-mc-clouds.jpg', cap: 'MC 角色展示 / 云海' },
      { src: 'media/art-8.jpg', year: '2025.09', cap: '3D 动画毛发渲染' },
      { src: 'media/art-3d-animation-render.jpg', cap: '3D 动画渲染' },
    ] },
    photo: { cn: '摄影', items: [
      // 按主体分组：六足蜘蛛 → 云台机器人 → 无人机 → 人物与现场。
      { src: 'media/photo-window-wide.jpg', cap: '六足蜘蛛 / 实拍' },
      { src: 'media/photo-window-three-quarter.jpg', cap: '六足蜘蛛 / 实拍' },
      { src: 'media/photo-hexapod-extended-overview.jpg', cap: '六足蜘蛛 / 展开全景' },
      { src: 'media/photo-top-view.jpg', cap: '六足蜘蛛 / 俯拍' },
      { src: 'media/photo-hexapod-body-detail.jpg', cap: '六足蜘蛛 / 机身细节' },
      { src: 'media/photo-leg-detail.jpg', cap: '六足蜘蛛 / 腿部' },
      { src: 'media/photo-front-folded.jpg', cap: '六足蜘蛛 / 收腿' },
      { src: 'media/photo-folded-three-quarter.jpg', cap: '六足蜘蛛 / 收腿' },
      { src: 'media/photo-gimbal-robot-front.jpg', cap: '云台机器人 / 正面' },
      { src: 'media/photo-gimbal-robot-workbench.jpg', cap: '云台机器人 / 工作台' },
      { src: 'media/photo-gimbal-robot-detail.jpg', cap: '云台机器人 / 细节' },
      { src: 'media/photo-drone-sunset.jpg', cap: '无人机 / 日落' },
      { src: 'media/photo-people-low-light-silhouettes.jpg', cap: '人物与现场 / 暗光剪影' },
    ] },
  },

  /* 方向页拼贴：小型四足机器人概念与相关项目。 */
  wall: [
    { src: 'media/sable-cover.jpg', cap: '小型四足机器人 · 形象概念', style: 'pet' },
    { src: 'media/bubble-arena.jpg', cap: '赛场仿真', style: 'arena' },
    { src: 'media/hex-1.jpg', cap: '六足机器人', style: 'hex' },
    { src: 'media/motor-encoder-assembly.jpg', cap: '电机驱动板', style: 'hardware' },
    { src: 'media/sable-sketch.jpg', cap: '小型四足机器人 · 概念手稿', style: 'sketch' },
  ],

  film: {
    promo: { src: 'media/rec-promo.mp4',
      embed: 'https://player.bilibili.com/player.html?isOutside=true&aid=117363991123043&bvid=BV1QsYP67Ee5&cid=42360308341&p=1&autoplay=1' },
    site: { src: 'media/rec-site-single.mp4' },
  },
};

/* ---------- 工具 ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const pad2 = (n) => String(n).padStart(2, '0');
const root = document.documentElement;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const isPhone = () => innerWidth < 760;

/* 未看提示：没点开过的标签和标题右上角显示红点，显示过一次就去掉（刷新页面后重置） */
const newDot = () => el('i', { class: 'new-dot', 'aria-hidden': 'true' });
const markSeen = (node) => node?.querySelector('.new-dot')?.remove();

function el(tag, props = {}, html) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(props)) {
    if (k === 'class') node.className = v;
    else if (k in node && k !== 'list') node[k] = v;
    else node.setAttribute(k, v);
  }
  if (html !== undefined) node.innerHTML = html;
  return node;
}

/* 视频交给浏览器分段加载；离屏缩略图不提前请求整段文件。 */
function loadVideo(v) {
  if (v.getAttribute('src')) return;
  v.preload = v.dataset.preload || 'metadata';
  v.src = v.dataset.at != null ? v.dataset.src + '#t=' + v.dataset.at : v.dataset.src;
}

const mediaIO = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    loadVideo(entry.target);
    mediaIO.unobserve(entry.target);
  }
}, { rootMargin: '100px' });

function video(src, opts = {}) {
  const v = el('video', { muted: true, playsInline: true, loop: true, preload: 'none' });
  v.setAttribute('muted', '');
  v.setAttribute('playsinline', '');
  v.dataset.src = src;
  v.dataset.preload = opts.preload || 'metadata';
  if (opts.at != null) v.dataset.at = opts.at;
  if (opts.auto) v.dataset.auto = '';
  if (opts.controls) v.controls = true;
  if (opts.controls || opts.hero) loadVideo(v);
  else mediaIO.observe(v);
  return v;
}

/* 首次网络请求失败后重试两次，避免一直留下破图；不无限刷新资源。 */
function retryImage(img) {
  if (!(img instanceof HTMLImageElement)) return;
  const source = img.getAttribute('src');
  if (!source || /^(data:|blob:)/.test(source)) return;
  const attempts = Number(img.dataset.retries || 0);
  if (attempts >= 2) return;
  img.dataset.retries = String(attempts + 1);
  setTimeout(() => {
    if (!img.isConnected || img.getAttribute('src') !== source) return;
    const url = new URL(source, location.href);
    url.searchParams.set('image_retry', String(attempts + 1));
    img.src = url.href;
  }, 500 * (attempts + 1));
}
document.addEventListener('error', (event) => retryImage(event.target), true);

function mediaNode(m, opts = {}) {
  if (m.type === 'video') return video(m.src, opts);
  const img = el('img', { src: m.src, alt: m.cap || '', decoding: 'async', loading: 'lazy' });
  return img;
}

function thumbNode(m) {
  const b = el('button', { type: 'button', class: 'thumb', 'aria-label': m.cap || '查看' });
  if (m.type === 'video') {
    b.append(video(m.src, { at: m.thumbAt ?? 1 }));
    b.append(el('span', { class: 'tv' }, 'VIDEO'));
  } else {
    b.append(el('img', { src: m.src, alt: '', loading: 'lazy' }));
  }
  return b;
}

/* 图集自动轮播：默认每 5 秒跳一张；用户点过之后，这一次等 10 秒再跳。
   视频不按时间跳，播完一遍再跳（最短 5 秒）。live() 为假时（不在当前屏、弹窗打开等）先不跳，过一会儿再看 */
const AUTO_MS = 5000;
const AUTO_AFTER_CLICK_MS = 10000;
function autoplay(next, live) {
  let timer = 0;
  let video = null;
  const clear = () => {
    clearTimeout(timer);
    if (video) { video.removeEventListener('ended', onEnd); video = null; }
  };
  const onEnd = () => { clear(); if (live()) next(); else arm(AUTO_MS); };
  const arm = (ms = AUTO_MS, v = null) => {
    clear();
    if (reduced) return;
    if (v) {
      /* 视频去掉循环，播完再换下一张 */
      video = v;
      v.loop = false;
      v.addEventListener('ended', onEnd);
    }
    let hidden = false;
    const check = () => {
      /* 不在可见状态：等回来后重新完整计时，免得一进屏就跳 */
      if (!live()) { hidden = true; timer = setTimeout(check, 500); return; }
      if (hidden) { hidden = false; timer = setTimeout(check, AUTO_MS); return; }
      /* 视频还在播：等它播完 */
      if (video && video.isConnected && !video.ended && !video.paused) { timer = setTimeout(check, 1000); return; }
      clear();
      next();
    };
    timer = setTimeout(check, ms);
  };
  return { arm, clear, clicked: (v) => arm(AUTO_AFTER_CLICK_MS, v) };
}

/* 只在缩略图条内部滚动，让当前项露出来；不带动整页 */
function scrollStrip(strip, item) {
  if (!strip || !item) return;
  const s = strip.getBoundingClientRect();
  const r = item.getBoundingClientRect();
  const behavior = reduced ? 'auto' : 'smooth';
  if (strip.scrollWidth > strip.clientWidth + 1) {
    if (r.left < s.left) strip.scrollBy({ left: r.left - s.left - 8, behavior });
    else if (r.right > s.right) strip.scrollBy({ left: r.right - s.right + 8, behavior });
  }
  if (strip.scrollHeight > strip.clientHeight + 1) {
    if (r.top < s.top) strip.scrollBy({ top: r.top - s.top - 4, behavior });
    else if (r.bottom > s.bottom) strip.scrollBy({ top: r.bottom - s.bottom + 4, behavior });
  }
}

/* 横向缩略图条：把当前项滚到条的正中（两头到底就停），只滚条本身 */
function centerStrip(strip, item) {
  if (!strip || !item || strip.scrollWidth <= strip.clientWidth + 1) return;
  /* 用缩略图在条里的固定位置算目标，不读当前滚动位置；上一次平滑滚动没走完时连按也不会算偏 */
  const s = strip.getBoundingClientRect();
  const r = item.getBoundingClientRect();
  const first = strip.firstElementChild.getBoundingClientRect();
  const pad = parseFloat(getComputedStyle(strip).paddingLeft) || 0;
  const offset = r.left - first.left + pad;
  const left = offset + r.width / 2 - s.width / 2;
  const max = strip.scrollWidth - strip.clientWidth;
  /* 页面在后台时浏览器不跑平滑滚动动画，直接跳到位 */
  strip.scrollTo({ left: Math.max(0, Math.min(max, left)), behavior: reduced || document.hidden ? 'auto' : 'smooth' });
}

/* 悬停时英文标签乱码后落定 */
function wireScramble() {
  if (reduced) return;
  const pool = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789/';
  for (const host of $$('[data-fx-host]')) {
    const target = $('[data-fx]', host);
    if (!target) continue;
    const text = target.textContent;
    let timer;
    host.addEventListener('mouseenter', () => {
      const start = performance.now();
      cancelAnimationFrame(timer);
      const tick = (now) => {
        const p = Math.min(1, (now - start) / 360);
        const locked = Math.floor(p * text.length);
        target.textContent = [...text].map((c, i) => (i < locked || c === ' ' ? c : pool[Math.floor(Math.random() * pool.length)])).join('');
        if (p < 1) timer = requestAnimationFrame(tick);
      };
      timer = requestAnimationFrame(tick);
    });
  }
}

/* ---------- 视频按需播放 ---------- */
const visible = new WeakSet();
const videoIO = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting) visible.add(e.target); else visible.delete(e.target);
  }
  syncVideos();
}, { threshold: .15 });
const seenVideos = new WeakSet();

function shouldPlay(v) {
  if (reduced || !visible.has(v) || document.hidden) return false;
  if (viewerEl.open) return false;
  if (detailOpen) return !!v.closest('#detail');
  if (v.closest('#detail')) return false;
  return !deckOn || v.closest('.sec') === secs[cur];
}

function syncVideos() {
  for (const v of $$('video[data-auto]')) {
    if (!seenVideos.has(v)) { seenVideos.add(v); videoIO.observe(v); }
    if (shouldPlay(v)) {
      loadVideo(v);
      if (v.paused) v.play().catch(() => {});
    } else if (!v.paused) {
      v.pause();
    }
  }
}
document.addEventListener('visibilitychange', syncVideos);

/* ---------- 整屏切换 ---------- */
const secs = $$('.sec');
const navLinks = $$('.nav a');
const railNo = $('#railNo');
let cur = 0;
let deckOn = false;
let lockUntil = 0;
let lastWheel = 0;
let inertia = false;
let wheelSum = 0;
let wheelReset;
let detailOpen = false;
/* 切换布局或按地址跳转后，短时间内不让滚动位置改写当前屏 */
let flowSettle = 0;
const viewerEl = $('#viewer');

function setRail(no, total, label) {
  railNo.textContent = pad2(no);
  $('#railCur').textContent = pad2(no);
  $('#railTotal').textContent = pad2(total);
  $('#railLabel').textContent = label;
  railNo.classList.remove('is-new');
  void railNo.offsetWidth;
  railNo.classList.add('is-new');
}

function markSection(i) {
  const sec = secs[i];
  root.dataset.sec = sec.id;
  navLinks.forEach((a) => {
    if (a.getAttribute('href') === `#${sec.id}`) a.setAttribute('aria-current', 'true');
    else a.removeAttribute('aria-current');
  });
  setRail(i + 1, secs.length, sec.dataset.label);
  if (location.hash !== `#${sec.id}` && (i > 0 || location.hash)) {
    history.replaceState(null, '', `#${sec.id}`);
  }
}

function go(i) {
  if (i < 0 || i >= secs.length || i === cur) return;
  if (!deckOn) {
    secs[i].scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
    return;
  }
  if (detailOpen) closeDetail(true);
  const up = i > cur;
  const from = secs[cur];
  const to = secs[i];
  stopFilm();
  for (const s of secs) {
    s.classList.remove('is-leaving', 'up', 'down', 'enter-up', 'enter-down');
    s.inert = s !== to;
  }
  from.classList.remove('is-active', 'is-live');
  from.classList.add('is-leaving', up ? 'up' : 'down');
  to.classList.add('is-active', 'is-live', up ? 'enter-up' : 'enter-down');
  cur = i;
  markSection(i);
  syncVideos();
  scheduleHero();
  lockUntil = performance.now() + (reduced ? 150 : 800);
  inertia = true;
  setTimeout(() => {
    from.classList.remove('is-leaving', 'up', 'down');
    to.classList.remove('enter-up', 'enter-down');
  }, reduced ? 0 : 660);
}

function setDeck() {
  const want = innerWidth >= 1024 && innerHeight >= 620;
  if (want === deckOn) return;
  deckOn = want;
  root.classList.toggle('deck', deckOn);
  closeMenu();
  for (const s of secs) {
    s.classList.remove('is-leaving', 'up', 'down', 'enter-up', 'enter-down');
    s.classList.toggle('is-active', deckOn && s === secs[cur]);
    s.inert = deckOn && s !== secs[cur];
    if (deckOn) s.classList.toggle('is-live', s === secs[cur]);
  }
  if (!deckOn) {
    flowSettle = performance.now() + 600;
    requestAnimationFrame(() => secs[cur].scrollIntoView({ behavior: 'auto' }));
  }
  if (deckOn) window.scrollTo(0, 0);
  syncVideos();
}

const liveIO = new IntersectionObserver((entries) => {
  if (deckOn) return;
  for (const e of entries) {
    e.target.classList.toggle('is-live', e.isIntersecting);
    if (e.isIntersecting && e.intersectionRatio >= .35 && performance.now() > flowSettle) {
      cur = secs.indexOf(e.target);
      markSection(cur);
      scheduleHero();
    }
    if (!e.isIntersecting && e.target.id === 'film') stopFilm();
  }
  syncVideos();
}, { threshold: [0, .35] });
secs.forEach((s) => liveIO.observe(s));

function onWheel(e) {
  if (!deckOn || detailOpen || viewerEl.open) return;
  const box = e.target.closest && e.target.closest('[data-scroll], .split-side');
  if (box && box.scrollHeight > box.clientHeight + 2) {
    const atTop = box.scrollTop <= 0;
    const atEnd = box.scrollTop + box.clientHeight >= box.scrollHeight - 1;
    if ((e.deltaY < 0 && !atTop) || (e.deltaY > 0 && !atEnd)) return;
  }
  e.preventDefault();
  const now = performance.now();
  const gap = now - lastWheel;
  lastWheel = now;
  if (now < lockUntil) return;
  if (inertia && gap < 70) return;
  inertia = false;
  wheelSum += e.deltaY;
  clearTimeout(wheelReset);
  wheelReset = setTimeout(() => { wheelSum = 0; }, 180);
  if (Math.abs(wheelSum) >= 36) {
    const dir = Math.sign(wheelSum);
    wheelSum = 0;
    go(cur + dir);
  }
}

function wireDeck() {
  addEventListener('wheel', onWheel, { passive: false });
  $('#detail').addEventListener('wheel', onDetailWheel, { passive: false });
  $('#detailPrev').addEventListener('click', () => detailStep(-1));
  $('#detailNext').addEventListener('click', () => detailStep(1));
  addEventListener('resize', setDeck);
  addEventListener('keydown', (e) => {
    if (viewerEl.open) return;
    if (detailOpen) {
      if (e.key === 'Escape') closeDetail();
      /* 左右方向键切换图片；焦点在视频控件上时把方向键留给视频快进 */
      const k = { ArrowLeft: -1, ArrowRight: 1 }[e.key];
      if (k && !e.altKey && !e.ctrlKey && !e.metaKey && !(e.target && e.target.tagName === 'VIDEO')) {
        e.preventDefault();
        detailStep(k);
      }
      return;
    }
    if (!deckOn || e.altKey || e.ctrlKey || e.metaKey) return;
    const k = { ArrowDown: 1, PageDown: 1, ArrowUp: -1, PageUp: -1 }[e.key];
    if (k) { e.preventDefault(); go(cur + k); }
    if (e.key === 'Home') { e.preventDefault(); go(0); }
    if (e.key === 'End') { e.preventDefault(); go(secs.length - 1); }
  });
  /* 平板横屏：上下滑动切屏 */
  let ty = null;
  addEventListener('touchstart', (e) => { ty = e.touches[0].clientY; }, { passive: true });
  addEventListener('touchend', (e) => {
    if (!deckOn || detailOpen || ty === null) return;
    const dy = ty - e.changedTouches[0].clientY;
    if (Math.abs(dy) > 60) go(cur + Math.sign(dy));
    ty = null;
  }, { passive: true });

  document.addEventListener('click', (e) => {
    const a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a) return;
    const i = secs.findIndex((s) => `#${s.id}` === a.getAttribute('href'));
    if (i < 0) return;
    e.preventDefault();
    closeMenu();
    if (detailOpen) closeDetail(true);
    go(i);
  });
  $('#railPrev').addEventListener('click', () => go(cur - 1));
  $('#railNext').addEventListener('click', () => go(cur + 1));
}

const menuBtn = $('#menuBtn');
const nav = $('#nav');
function closeMenu() { nav.classList.remove('is-open'); menuBtn.setAttribute('aria-expanded', 'false'); }
menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  menuBtn.setAttribute('aria-expanded', String(open));
});

/* ---------- 01 个人档案 ---------- */
let heroIndex = 0;
let heroTimer = 0;
let pageReady = false;
const heroBg = $('#heroBg');

function heroList() { return isPhone() ? CONTENT.heroVideosPhone : CONTENT.heroVideos; }

function showHero(src, animate) {
  const layer = el('div', { class: 'hb-layer' });
  const v = video(src, { preload: 'auto', hero: true });
  v.autoplay = !reduced;
  layer.append(v);
  const prev = $$('.hb-layer', heroBg).pop();
  const reveal = () => {
    if (reveal.done) return;
    reveal.done = true;
    if (!layer.isConnected) return;
    if (animate && !reduced) {
      layer.classList.add('is-in');
      if (prev) prev.classList.add('is-out');
    } else {
      layer.style.visibility = '';
    }
    setTimeout(() => {
      layer.classList.remove('is-in');
      $$('.hb-layer', heroBg).filter((n) => n !== layer).forEach((n) => n.remove());
    }, animate && !reduced ? 900 : 0);
    if (!heroIsLive()) v.pause(); else v.play().catch(() => {});
  };
  layer.style.visibility = 'hidden';
  v.addEventListener('canplay', () => { layer.style.visibility = ''; reveal(); }, { once: true });
  setTimeout(() => { layer.style.visibility = ''; reveal(); }, 2500);
  heroBg.append(layer);
}

function heroIsLive() {
  if (reduced || document.hidden || detailOpen) return false;
  if (deckOn) return cur <= 1;
  return secs[0].classList.contains('is-live');
}

function scheduleHero() {
  clearTimeout(heroTimer);
  if (!pageReady) return;
  placeHeroBg();
  const v = $$('.hb-layer video', heroBg).pop();
  if (!heroIsLive()) { if (v) v.pause(); return; }
  if (!v) showHero(heroList()[heroIndex], false);
  else if (v.paused) v.play().catch(() => {});
  heroTimer = setTimeout(() => {
    const list = heroList();
    heroIndex = (heroIndex + 1) % list.length;
    showHero(list[heroIndex], true);
    scheduleHero();
  }, 8200);
}

function buildProfile() {
  const box = $('#facets');
  const text = $('#facetText');
  CONTENT.facets.forEach((f, i) => {
    const b = el('button', { type: 'button', class: 'facet', 'aria-pressed': 'false' }, `<img src="${f.thumb}" alt="" loading="eager"><span>${f.cn}</span>`);
    const pick = () => {
      $$('.facet', box).forEach((n) => { n.classList.toggle('is-on', n === b); n.setAttribute('aria-pressed', String(n === b)); });
      text.textContent = f.text;
      text.classList.remove('is-new');
      void text.offsetWidth;
      text.classList.add('is-new');
    };
    b.addEventListener('click', pick);
    box.append(b);
    if (i === 0) pick();
  });
  /* 真人出镜：头像翻到背面的真人照片，再点翻回来 */
  const realBtn = $('#realBtn');
  /* 每次点击：圆盘顺时针多转一圈并翻面，青色圈逆时针转；角度一直累加，所以来回点都朝同一方向转 */
  let flips = 0;
  realBtn.addEventListener('click', () => {
    flips += 1;
    const on = flips % 2 === 1;
    const disc = $('#avatarFlip');
    disc.classList.toggle('is-real', on);
    disc.style.setProperty('--spin', `${flips * 360}deg`);
    disc.style.setProperty('--flip', `${flips * 180}deg`);
    $('.avatar-ring').style.setProperty('--ring', `${flips * -360}deg`);
    realBtn.setAttribute('aria-pressed', String(on));
    realBtn.querySelector('b').textContent = on ? '换回头像' : '真人出镜';
  });
  const flags = $('#flags');
  for (const f of CONTENT.flags) {
    const b = el('button', { type: 'button', class: `flag ${f.tone}`, 'data-fx-host': '' }, `<b data-fx>${f.en}</b><span>${f.cn}</span>`);
    b.addEventListener('click', () => {
      if (f.tab) setArtTab(f.tab);
      go(secs.findIndex((s) => s.id === f.to));
    });
    flags.append(b);
  }
}

/* ---------- 02 RM 战队工作 ---------- */
function buildFit() {
  const cards = $('#fitCards');
  CONTENT.rm.forEach((f, i) => {
    const repo = f.repo ? `<i>${f.repo}</i>` : '';
    cards.append(el('div', { class: 'fit-card', 'data-in': '', style: `--i:${Math.min(i + 1, 3)}` },
      `<small><em>${pad2(i + 1)}</em>${f.state}${repo}</small><h3>${f.title}</h3><p>${f.text}</p>`));
  });
  $('#fitPast').innerHTML = CONTENT.rmPast;

  const card = $('#rmCard');
  card.innerHTML = `<header><small>// MATCH RECORD</small><h3 id="hRmCard">比赛照片与奖项</h3></header>`;
  const photos = el('div', { class: 'rm-photos' });
  CONTENT.rmPhotos.forEach((p, i) => {
    const b = el('button', { type: 'button', class: `rm-photo p${i + 1}`, 'aria-label': `查看大图：${p.cap}` },
      `<img src="${p.src}" alt="" loading="lazy" style="object-position:${p.pos || '50% 50%'}">`);
    b.addEventListener('click', () => openViewer({ type: 'image', src: p.src, cap: p.cap }));
    photos.append(b);
  });
  card.append(photos);
  const awards = el('ul', { class: 'rm-awards', 'aria-label': '获奖证书' });
  for (const a of CONTENT.awards) {
    const cap = `${a.note} · ${a.title}`;
    const button = el('button', { type: 'button', 'aria-label': `查看证书：${cap}` },
      `<img src="${a.src}" alt="" loading="lazy"><b>${a.title}</b><span>${a.note}</span>`);
    button.addEventListener('click', () => openViewer({ type: 'image', src: a.src, cap }));
    const item = el('li');
    item.append(button);
    awards.append(item);
  }
  card.append(awards);
}

/* 个人档案和 RM 战队工作共用同一个黑白背景：切到哪屏，背景元素就挪到哪屏，只解码一路视频 */
function placeHeroBg() {
  const host = deckOn && secs[cur].id === 'rm' ? $('#fitBg') : $('#profile');
  if (heroBg.parentElement !== host) host.prepend(heroBg);
}

/* ---------- 03 技术项目 ---------- */
const detail = $('#detail');
let detailIndex = 0;
let openedPanel = null;
let detailAuto = { arm() {}, clear() {}, clicked() {} };
let detailStep = () => {};
let navReadyTimer = 0;
/* 详情页滚轮：累计到一格才跳，跳完锁一下，触控板的一次长滑只算一张 */
let detailWheelSum = 0;
let detailWheelLock = 0;
let detailWheelReset = 0;
let detailWheelLast = 0;
function onDetailWheel(e) {
  if (!detailOpen || viewerEl.open || e.ctrlKey) return;
  /* 左侧说明栏能滚就让它滚 */
  const side = e.target.closest && e.target.closest('.detail-side');
  if (side) return;
  /* 手机流式布局下详情是整页滚动，只在缩略图和大图上接管 */
  if (!deckOn && !(e.target.closest && e.target.closest('.detail-main'))) return;
  const d = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
  if (!d) return;
  e.preventDefault();
  const now = performance.now();
  const gap = now - detailWheelLast;
  detailWheelLast = now;
  if (now < detailWheelLock) { if (gap < 90) detailWheelLock = now + 90; return; }
  detailWheelSum += d;
  clearTimeout(detailWheelReset);
  detailWheelReset = setTimeout(() => { detailWheelSum = 0; }, 180);
  if (Math.abs(detailWheelSum) >= 36) {
    const dir = Math.sign(detailWheelSum);
    detailWheelSum = 0;
    detailWheelLock = now + 360;
    detailStep(dir);
  }
}

function buildTech() {
  const box = $('#panels');
  CONTENT.tech.forEach((p, i) => {
    const b = el('button', { type: 'button', class: 'panel', 'aria-haspopup': 'dialog' });
    const cover = mediaNode({ ...p.cover, cap: '' }, { at: p.cover.at });
    cover.classList.add('panel-cover');
    b.append(cover);
    b.append(el('span', { class: 'panel-text' },
      `<span class="panel-state ${p.done ? 'done' : ''}">${p.state} / ${p.date}</span><h3><span>${p.title}</span></h3><span class="panel-en">${p.en}</span><span class="panel-more">VIEW MORE &gt;</span>`));
    $('h3 span', b).append(newDot());
    b.addEventListener('click', () => openDetail(i, b));
    box.append(b);
  });
  const tabs = $('#detailTabs');
  CONTENT.tech.forEach((p, i) => {
    const t = el('button', { type: 'button', class: 'chip' }, p.short);
    t.append(newDot());
    t.addEventListener('click', () => renderDetail(i));
    tabs.append(t);
  });
  $('#detailBack').addEventListener('click', () => closeDetail());
}

function panelClip(panel) {
  const r = panel.getBoundingClientRect();
  const w = innerWidth;
  const h = innerHeight;
  return `inset(${Math.max(0, r.top)}px ${Math.max(0, w - r.right)}px ${Math.max(0, h - r.bottom)}px ${Math.max(0, r.left)}px)`;
}

function renderDetail(i) {
  detailIndex = i;
  const p = CONTENT.tech[i];
  $$('#detailTabs .chip').forEach((c, n) => c.classList.toggle('is-on', n === i));
  markSeen($$('#detailTabs .chip')[i]);
  markSeen($$('#panels .panel')[i]);
  const body = $('#detailBody');
  body.innerHTML = '';
  body.append(el('p', { class: 'detail-date', style: '--n:0' }, `${p.state} <i>//</i> ${p.date}`));
  body.append(el('h2', { id: 'detailTitle', style: '--n:1' }, p.titleLong));
  body.append(el('p', { class: 'detail-en', style: '--n:1' }, p.en));
  body.append(el('p', { class: 'detail-desc', style: '--n:2' }, p.desc));
  body.append(el('dl', { class: 'fields', style: '--n:3' }, p.fields.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')));
  body.classList.remove('is-new');
  void body.offsetWidth;
  if (!reduced) body.classList.add('is-new');

  const stage = $('#detailStage');
  const thumbs = $('#detailThumbs');
  thumbs.innerHTML = '';
  let at = 0;
  const total = p.media.length;
  const show = (n, byUser) => {
    at = n;
    const m = p.media[n];
    const btn = $$('.thumb', thumbs)[n];
    $$('.thumb', thumbs).forEach((t) => t.classList.toggle('is-on', t === btn));
    centerStrip(thumbs, btn);
    $('#detailCount').innerHTML = `<b>${pad2(n + 1)}</b> / ${pad2(total)}`;
    const cap = $('#detailCap');
    cap.innerHTML = m.cap ? `<b>${m.cap}</b>${m.desc ? `<span>${m.desc}</span>` : ''}` : '';
    cap.classList.toggle('on-video', m.type === 'video');
    cap.classList.remove('is-new');
    void cap.offsetWidth;
    if (!reduced) cap.classList.add('is-new');
    stage.querySelectorAll('video').forEach((v) => v.pause());
    stage.innerHTML = '';
    const node = mediaNode(m, { auto: m.type === 'video', controls: m.type === 'video', preload: 'auto' });
    node.classList.add('is-in');
    if (m.type === 'image') {
      node.style.cursor = 'zoom-in';
      node.addEventListener('click', () => { detailAuto.clicked(); openViewer(m); });
    } else {
      node.addEventListener('click', () => detailAuto.clicked(node));
    }
    stage.append(node);
    syncVideos();
    const v = m.type === 'video' ? node : null;
    if (byUser) detailAuto.clicked(v); else detailAuto.arm(AUTO_MS, v);
  };
  detailAuto.clear();
  detailAuto = autoplay(() => show((at + 1) % total), () => detailOpen && !viewerEl.open && !document.hidden);
  /* 左右按钮、方向键、滚轮都走这里；首尾循环，算作用户操作（之后等 10 秒再自动跳） */
  detailStep = (dir) => show((at + dir + total) % total, true);
  /* 左右键等内页展开动画和第一张画面的擦入都放完再出现（两者约 0.62 秒） */
  const view = $('#detailView');
  view.classList.remove('nav-ready');
  clearTimeout(navReadyTimer);
  navReadyTimer = setTimeout(() => view.classList.add('nav-ready'), reduced ? 0 : 680);
  const single = total < 2;
  $('#detailPrev').hidden = single;
  $('#detailNext').hidden = single;
  p.media.forEach((m, n) => {
    const t = thumbNode(m);
    t.addEventListener('click', () => show(n, true));
    thumbs.append(t);
  });
  show(0, false);
  setRail(i + 1, CONTENT.tech.length, p.rail);
}

function openDetail(i, panel) {
  detailOpen = true;
  openedPanel = panel;
  root.dataset.detail = '';
  detail.hidden = false;
  detail.scrollTop = 0;
  renderDetail(i);
  if (deckOn && !reduced) {
    detail.style.setProperty('--from', panelClip(panel));
    detail.classList.remove('is-closing');
    detail.classList.add('is-opening');
    const list = $$('.panel');
    const idx = list.indexOf(panel);
    list.forEach((p, n) => {
      p.classList.toggle('before', n < idx);
      p.classList.toggle('after', n > idx);
    });
    $('#panels').classList.add('is-opening');
    setTimeout(() => detail.classList.remove('is-opening'), 640);
  }
  document.body.style.overflow = deckOn ? '' : 'hidden';
  scheduleHero();
  syncVideos();
  $('#detailBack').focus({ preventScroll: true });
}

function closeDetail(immediate) {
  if (!detailOpen) return;
  detailOpen = false;
  document.body.style.overflow = '';
  delete root.dataset.detail;
  const finish = () => {
    detail.hidden = true;
    detail.classList.remove('is-closing');
    detailAuto.clear();
    clearTimeout(navReadyTimer);
    $('#detailView').classList.remove('nav-ready');
    $('#detailStage').innerHTML = '';
    $('#detailThumbs').innerHTML = '';
    $('#panels').classList.remove('is-opening');
  };
  if (deckOn) setRail(cur + 1, secs.length, secs[cur].dataset.label);
  const panel = openedPanel && $$('.panel')[detailIndex];
  if (immediate || reduced || !deckOn) {
    finish();
  } else {
    if (panel) detail.style.setProperty('--from', panelClip(panel));
    detail.classList.add('is-closing');
    $('#panels').classList.remove('is-opening');
    setTimeout(finish, 420);
  }
  scheduleHero();
  syncVideos();
  if (panel && !immediate) panel.focus({ preventScroll: true });
}

/* ---------- 04 招新影像 ---------- */
let filmMode = 'site';
const filmVideos = new Map();

function getFilmVideo(mode) {
  if (filmVideos.has(mode)) return filmVideos.get(mode);
  const v = video(CONTENT.film[mode].src, { auto: true, preload: 'auto' });
  v.loop = false;
  filmVideos.set(mode, v);
  v.addEventListener('playing', () => {
    // Buffer the next clip without playing it; reuse this same element on switch.
    getFilmVideo(mode === 'site' ? 'promo' : 'site');
  }, { once: true });
  v.addEventListener('ended', () => {
    if ($('#filmStage').contains(v)) renderFilm(mode === 'site' ? 'promo' : 'site');
  });
  v.load();
  return v;
}

function stopFilm() {
  if ($('#filmStage iframe')) renderFilm(filmMode);
}

function renderFilm(mode) {
  filmMode = mode;
  const stage = $('#filmStage');
  stage.querySelectorAll('video').forEach((v) => v.pause());
  stage.innerHTML = '';
  $$('#filmTabs .chip').forEach((c) => {
    c.classList.toggle('is-on', c.dataset.film === mode);
    if (c.dataset.film === mode) markSeen(c);
  });
  const f = CONTENT.film[mode];
  const v = getFilmVideo(mode);
  if (v.currentTime !== 0) v.currentTime = 0;
  v.classList.add('is-in');
  stage.append(v);
  if (f.embed) {
    const b = el('button', { type: 'button', class: 'film-play' }, '<span><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 2.5v15L17 10Z"/></svg>播放完整版（B 站，有声）</span>');
    b.addEventListener('click', () => {
      v.pause();
      stage.innerHTML = '';
      const frame = el('iframe', { src: f.embed, title: 'RM2027 招新宣传片', allowFullscreen: true, allow: 'autoplay; fullscreen' });
      frame.setAttribute('scrolling', 'no');
      stage.append(frame);
    });
    stage.append(b);
  }
  syncVideos();
}

function buildFilm() {
  $$('#filmTabs .chip').forEach((c) => {
    c.append(newDot());
    c.addEventListener('click', () => renderFilm(c.dataset.film));
  });
  renderFilm('site');
}

/* ---------- 05 小项目 ---------- */
/* 底部菜单一个项目一张封面；舞台上的左右箭头在当前项目里切换多张；
   自动播放先走完项目内的每一张，再换下一个项目 */
let labIdx = 0;
let labShot = 0;
let labByUser = false;
const labAuto = autoplay(() => stepLab(1, false), () => $('#lab').classList.contains('is-live') && !detailOpen && !viewerEl.open && !document.hidden);

function buildLab() {
  $('#labAlso').innerHTML = CONTENT.labAlso;
  const thumbs = $('#labThumbs');
  CONTENT.lab.forEach((p, i) => {
    const c = p.items[p.cover || 0];
    const b = el('button', { type: 'button', class: 'lab-card', 'aria-label': `${p.title}，${p.items.length} 项` });
    if (c.type === 'video') b.append(video(c.src, { at: 1.5 }));
    else b.append(el('img', { src: c.src, alt: '', loading: 'lazy' }));
    b.append(el('b', {}, `<em>${pad2(i + 1)}</em><span>${p.title}</span>`));
    $('b', b).append(newDot());
    if (p.items.length > 1) b.append(el('i', { class: 'lab-count' }, `${p.items.length}`));
    b.addEventListener('click', () => {
      if (i === labIdx) { labAuto.clicked(); openViewer(labItem()); } else renderLab(i, 0, true, true);
    });
    thumbs.append(b);
  });
  $('#labPrev').addEventListener('click', () => stepLab(-1, true));
  $('#labNext').addEventListener('click', () => stepLab(1, true));
  $('#labOpen').addEventListener('click', () => { labAuto.clicked(); openViewer(labItem()); });
  wireLabSwipe();
  renderLab(0, 0, false);
}

function wireLabSwipe() {
  const lab = $('#lab');
  let wheelTotal = 0, wheelLast = 0, wheelUsed = false, swipeAt = 0;
  lab.addEventListener('wheel', (e) => {
    if (e.ctrlKey || detailOpen || viewerEl.open) return;
    const dx = e.shiftKey && !e.deltaX ? e.deltaY : e.deltaX;
    if (!dx || (!e.shiftKey && Math.abs(dx) <= Math.abs(e.deltaY))) return;
    e.stopPropagation();
    // Keep the thumbnail strip's native horizontal scrolling.
    if (e.target.closest('#labThumbs')) return;
    e.preventDefault();
    const now = performance.now();
    if (now - wheelLast > 180) { wheelTotal = 0; wheelUsed = false; }
    wheelLast = now;
    if (wheelUsed || now - swipeAt < 750) return;
    wheelTotal += dx * (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? lab.clientWidth : 1);
    if (Math.abs(wheelTotal) >= 45) {
      stepLab(Math.sign(wheelTotal), true);
      wheelUsed = true;
      swipeAt = now;
    }
  }, { passive: false });
  let start = null;
  lab.addEventListener('touchstart', (e) => {
    start = e.touches.length === 1 && !e.target.closest('#labThumbs, button, a')
      ? { x: e.touches[0].clientX, y: e.touches[0].clientY } : null;
  }, { passive: true });
  lab.addEventListener('touchend', (e) => {
    if (!start || detailOpen || viewerEl.open) return;
    const dx = start.x - e.changedTouches[0].clientX;
    const dy = start.y - e.changedTouches[0].clientY;
    start = null;
    if (Math.abs(dx) < 45 || Math.abs(dx) <= Math.abs(dy) * 1.3) return;
    e.stopPropagation();
    const now = performance.now();
    if (now - swipeAt < 750) return;
    stepLab(Math.sign(dx), true);
    swipeAt = now;
  }, { passive: true });
  lab.addEventListener('touchmove', (e) => {
    if (!start || e.touches.length !== 1) { start = null; return; }
    const dx = start.x - e.touches[0].clientX;
    const dy = start.y - e.touches[0].clientY;
    if (Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(dy) * 1.3) e.preventDefault();
  }, { passive: false });
  lab.addEventListener('touchcancel', () => { start = null; }, { passive: true });
}

function labItem() {
  const p = CONTENT.lab[labIdx];
  const m = p.items[labShot];
  return { ...m, title: p.title, cap: m.note };
}

function stepLab(dir, byUser) {
  const p = CONTENT.lab[labIdx];
  const n = labShot + dir;
  if (n >= 0 && n < p.items.length) renderLab(labIdx, n, true, byUser);
  else if (dir > 0) renderLab(labIdx + 1, 0, true, byUser);
  else {
    const prev = (labIdx - 1 + CONTENT.lab.length) % CONTENT.lab.length;
    renderLab(prev, CONTENT.lab[prev].items.length - 1, true, byUser);
  }
}

function renderLab(i, shot = 0, animate = true, byUser = false) {
  labByUser = byUser;
  const list = CONTENT.lab;
  const changed = ((i + list.length) % list.length) !== labIdx;
  labIdx = (i + list.length) % list.length;
  const p = list[labIdx];
  labShot = Math.max(0, Math.min(shot, p.items.length - 1));
  const m = p.items[labShot];

  const bg = $('#labBg');
  const layer = el('div', { class: 'lab-layer' });
  let labVideo = null;
  if (m.type === 'image') {
    layer.append(el('img', { class: 'blur', src: m.src, alt: '' }));
    layer.append(el('img', { class: 'fg', src: m.src, alt: '' }));
  } else {
    labVideo = video(m.src, { auto: true, preload: 'auto' });
    labVideo.classList.add('fg');
    layer.append(labVideo);
  }
  if (animate && !reduced) layer.classList.add('is-in');
  const old = [...bg.children];
  bg.append(layer);
  setTimeout(() => old.forEach((o) => o.remove()), animate && !reduced ? 760 : 0);

  const info = $('#labInfo');
  const count = p.items.length > 1 ? `<span class="lab-shot">${pad2(labShot + 1)} / ${pad2(p.items.length)}</span>` : '';
  const link = p.link ? `<a class="lab-link" href="${p.link.href}" target="_blank" rel="noopener">${p.link.text}<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 4h12v12h-2.6V8.4L5.8 16 4 14.2l7.6-7.6H4Z"/></svg></a>` : '';
  info.innerHTML = `<div class="lab-meta"><span class="lab-tag">${p.tag}</span><span class="lab-note">${m.note}</span>${count}</div><p class="lab-title">${p.title}</p><p class="lab-desc">${p.desc}</p>${link}`;
  info.classList.remove('is-new');
  void info.offsetWidth;
  if (animate && !reduced && changed) info.classList.add('is-new');

  $$('#labThumbs .lab-card').forEach((c, n) => {
    c.classList.toggle('is-on', n === labIdx);
    if (n === labIdx) markSeen(c);
    if (n === labIdx) c.setAttribute('aria-current', 'true'); else c.removeAttribute('aria-current');
  });
  const on = $$('#labThumbs .lab-card')[labIdx];
  if (changed) scrollStrip($('#labThumbs'), on);

  const dots = $('#labDots');
  dots.innerHTML = p.items.length > 1 ? p.items.map((_, n) => `<i class="${n === labShot ? 'is-on' : ''}"></i>`).join('') : '';
  $('#labOpen').setAttribute('aria-label', m.type === 'video' ? '全屏播放' : '查看大图');

  syncVideos();
  if (labByUser) labAuto.clicked(labVideo); else labAuto.arm(AUTO_MS, labVideo);
}

/* ---------- 06 艺术 ---------- */
let artTab = 'draw';
let artAt = 0;
const artAuto = autoplay(() => {
  const list = CONTENT.art[artTab].items;
  showArt((artAt + 1) % list.length, true, false);
}, () => $('#art').classList.contains('is-live') && !detailOpen && !viewerEl.open && !document.hidden);

function setArtTab(key, byUser) {
  artTab = key;
  $$('#artTabs .chip').forEach((c) => {
    c.classList.toggle('is-on', c.dataset.tab === key);
    if (c.dataset.tab === key) markSeen(c);
  });
  const box = $('#artThumbs');
  box.innerHTML = '';
  const group = CONTENT.art[key];
  $('#artNote').textContent = group.note ? ` ${group.note}` : '';
  group.items.forEach((it, i) => {
    const t = thumbNode({ ...it, type: 'image' });
    t.addEventListener('click', () => showArt(i, true, true));
    box.append(t);
  });
  showArt(0, !!byUser, !!byUser);
}

function showArt(i, animate = true, byUser = false) {
  artAt = i;
  const it = CONTENT.art[artTab].items[i];
  const thumb = $$('#artThumbs .thumb')[i];
  $$('#artThumbs .thumb').forEach((t) => t.classList.toggle('is-on', t === thumb));
  scrollStrip($('#artThumbs'), thumb);
  const main = $('#artMain');
  const img = el('img', { src: it.src, alt: it.cap });
  if (animate && !reduced) img.classList.add('is-in');
  const old = [...main.children];
  main.append(img);
  setTimeout(() => old.forEach((n) => n.remove()), animate && !reduced ? 660 : 0);
  /* 带 href 的作品点开是原帖（新标签页），其它的放大看 */
  main.onclick = () => {
    artAuto.clicked();
    if (it.href) window.open(it.href, '_blank', 'noopener');
    else openViewer({ ...it, type: 'image' });
  };
  main.setAttribute('aria-label', it.href ? '查看原帖' : '查看大图');
  $('#artGhost').innerHTML = `<img src="${it.src}" alt="">`;
  $('#artBlur').style.backgroundImage = `url("${it.src}")`;
  $('#artCap').innerHTML = it.year ? `<i>${it.year}</i>${it.cap}` : it.cap;
  if (byUser) artAuto.clicked(); else artAuto.arm();
}

function buildArt() {
  const tabs = $('#artTabs');
  for (const [key, group] of Object.entries(CONTENT.art)) {
    const c = el('button', { type: 'button', class: 'chip' }, `${group.cn} ${pad2(group.items.length)}`);
    c.dataset.tab = key;
    c.append(newDot());
    c.addEventListener('click', () => setArtTab(key, true));
    tabs.append(c);
  }
  setArtTab('draw');
  wireArtSwipe();
}

function wireArtSwipe() {
  const main = $('#artMain');
  let lastWheel = 0, wheelSum = 0, wheelUsed = false, lastStep = -Infinity;
  let start = null, suppressClickUntil = 0;
  const step = (dir) => {
    const count = CONTENT.art[artTab].items.length;
    showArt((artAt + dir + count) % count, true, true);
  };
  main.addEventListener('wheel', (e) => {
    if (e.ctrlKey || viewerEl.open || detailOpen) return;
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (!delta) return;
    e.preventDefault();
    e.stopPropagation();
    const now = performance.now();
    if (now - lastWheel > 180) { wheelSum = 0; wheelUsed = false; }
    lastWheel = now;
    if (wheelUsed || now - lastStep < 750) return;
    wheelSum += delta * (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? main.clientWidth : 1);
    if (Math.abs(wheelSum) >= 45) {
      step(Math.sign(wheelSum));
      wheelUsed = true;
      lastStep = now;
    }
  }, { passive: false });
  main.addEventListener('touchstart', (e) => {
    start = e.touches.length === 1 ? { x: e.touches[0].clientX, y: e.touches[0].clientY } : null;
  }, { passive: true });
  main.addEventListener('touchmove', (e) => {
    if (!start || e.touches.length !== 1) { start = null; return; }
    const dx = start.x - e.touches[0].clientX;
    const dy = start.y - e.touches[0].clientY;
    if (Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(dy) * 1.3) {
      e.preventDefault();
      suppressClickUntil = performance.now() + 500;
    }
  }, { passive: false });
  main.addEventListener('touchend', (e) => {
    if (!start) return;
    const dx = start.x - e.changedTouches[0].clientX;
    const dy = start.y - e.changedTouches[0].clientY;
    start = null;
    if (viewerEl.open || detailOpen || Math.abs(dx) < 45 || Math.abs(dx) <= Math.abs(dy) * 1.3) return;
    e.stopPropagation();
    suppressClickUntil = performance.now() + 500;
    if (performance.now() - lastStep < 750) return;
    step(Math.sign(dx));
    lastStep = performance.now();
  }, { passive: true });
  main.addEventListener('touchcancel', () => { start = null; }, { passive: true });
  main.addEventListener('click', (e) => {
    if (performance.now() < suppressClickUntil) { e.preventDefault(); e.stopImmediatePropagation(); }
  }, true);
}

/* ---------- 07 联系：剪贴照片墙 ---------- */
function buildWall() {
  const grid = $('#wall');
  CONTENT.wall.forEach((it, i) => {
    const b = el('button', { type: 'button', class: `wall-cell wall-${it.style}`, style: `--i:${i}`, 'aria-label': `查看：${it.cap}` },
      `<img src="${it.src}" alt="" loading="lazy">`);
    b.addEventListener('click', () => openViewer({ type: 'image', src: it.src, cap: it.cap }));
    grid.append(b);
  });
}

/* ---------- 查看大图 ---------- */
function openViewer(m) {
  const body = $('#viewerBody');
  body.innerHTML = '';
  if (m.type === 'video') {
    const v = video(m.src, { controls: true, preload: 'auto' });
    body.append(v);
    v.play().catch(() => {});
  } else {
    body.append(el('img', { src: m.src, alt: m.cap || m.title || '' }));
  }
  $('#viewerCap').textContent = [m.title, m.note || m.cap].filter(Boolean).join(' / ');
  viewerEl.showModal();
  syncVideos();
}
$('#viewerClose').addEventListener('click', () => viewerEl.close());
viewerEl.addEventListener('click', (e) => { if (e.target === viewerEl || e.target.id === 'viewerBody') viewerEl.close(); });
viewerEl.addEventListener('close', () => {
  $('#viewerBody').innerHTML = '';
  syncVideos();
});

/* ---------- 载入 ---------- */
/* 只等待当前屏的图片；字体、背景视频和其他页面不阻塞进入。 */
function loadTasks() {
  return $$('img', secs[cur]).filter((img) => {
    const r = img.getBoundingClientRect();
    return r.width > 0 && r.height > 0 && r.bottom > 0 && r.top < innerHeight && r.right > 0 && r.left < innerWidth;
  }).map((img) => {
    img.loading = 'eager';
    img.fetchPriority = 'high';
    if (img.complete) return Promise.resolve();
    return new Promise((resolve) => {
      const finish = () => {
        img.removeEventListener('load', finish);
        img.removeEventListener('error', finish);
        resolve();
      };
      img.addEventListener('load', finish, { once: true });
      img.addEventListener('error', finish, { once: true });
      setTimeout(finish, 2200);
    });
  });
}

function runLoader(done) {
  const loader = $('#loader');
  if (reduced) { loader.remove(); done(); return; }
  const num = $('#loaderNum');
  const started = performance.now();
  const minMs = 450;
  const maxMs = 2200;
  const tasks = loadTasks();
  let finished = 0, closed = false, frame = 0;
  const finish = () => {
    if (closed) return;
    closed = true;
    clearTimeout(deadline);
    cancelAnimationFrame(frame);
    loader.style.setProperty('--p', '1');
    num.firstChild.nodeValue = '100';
    loader.classList.add('is-done');
    done();
    setTimeout(() => loader.remove(), 560);
  };
  /* 超时用独立计时器兜底，不依赖视频或动画帧是否继续回调。 */
  const deadline = setTimeout(finish, maxMs);
  Promise.all(tasks.map((task) => task.catch(() => {}).then(() => { finished += 1; })))
    .then(() => { if (!closed) setTimeout(finish, Math.max(0, minMs - (performance.now() - started))); });
  const tick = (now) => {
    if (closed) return;
    const real = tasks.length ? finished / tasks.length : 1;
    const progress = Math.min(.97, (now - started) / minMs, real);
    loader.style.setProperty('--p', progress.toFixed(4));
    num.firstChild.nodeValue = String(Math.round(progress * 100));
    num.classList.toggle('is-low', progress * innerWidth < num.offsetWidth + 40);
    frame = requestAnimationFrame(tick);
  };
  frame = requestAnimationFrame(tick);
}

/* ---------- 启动 ---------- */
function init() {
  $$('img').filter((img) => img.complete && !img.naturalWidth).forEach(retryImage);
  buildProfile();
  buildFit();
  buildTech();
  buildFilm();
  buildLab();
  buildArt();
  buildWall();
  wireScramble();
  wireDeck();

  const hash = location.hash.slice(1);
  const fromHash = secs.findIndex((s) => s.id === hash);
  cur = fromHash >= 0 ? fromHash : 0;
  flowSettle = performance.now() + 900;
  setDeck();
  if (!deckOn && fromHash > 0) secs[cur].scrollIntoView({ behavior: 'auto' });
  markSection(cur);
  syncVideos();
  /* 载入期间不响应滚轮，免得按地址打开后被滚动带到别的屏 */
  lockUntil = Infinity;
  runLoader(() => {
    lockUntil = performance.now() + 400;
    if (deckOn) {
      secs[cur].classList.remove('is-active');
      void secs[cur].offsetWidth;
      secs[cur].classList.add('is-active');
    }
    pageReady = true;
    scheduleHero();
  });
}

init();
