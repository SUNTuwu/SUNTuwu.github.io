'use strict';

/* ---------- 页面文案和素材，改内容只需要改这里 ---------- */
const CONTENT = {
  heroVideos: ['media/rec-promo.mp4', 'media/sable-teachers.mp4', 'media/sim-3.mp4', 'media/rec-site-single.mp4', 'media/dice.mp4'],
  heroVideosPhone: ['media/rec-promo.mp4', 'media/sim-3.mp4', 'media/rec-site-single.mp4'],

  facets: [
    { cn: '现役 RMer', thumb: 'media/facet-rm.jpg',
      text: '现役 RMer，算法组成员，2026 赛季哨兵研发代表。我热爱 DIY，有机械、算法和硬件相关经验。' },
    { cn: '创作者', thumb: 'media/art-1.jpg',
      text: '我也是创作者：3D 建模师、二次元画师，也会摄影和动画制作。B 站粉丝 2.7 万，小红书 1.5 万，最火视频全网播放超 200 万。' },
    { cn: '铲屎官', thumb: 'media/facet-cat.jpg',
      text: '资深铲屎官 + 究极猫奴！以后的方向是智能宠物和情感陪伴，现在正在训练一只强化学习四足宠物。' },
    { cn: '为什么是 Beni', thumb: 'media/facet-beni-outdoor.png',
      text: '锁定、追击、空翻、跳台阶，正是 RMer 心里串联腿该有的样子！Beni 又贴近生活、可爱灵动，就是我期待的小机器人。' },
  ],

  flags: [
    { en: 'ALGORITHM', cn: '算法 + RL', to: 'tech', tone: '' },
    { en: '3D DESIGN', cn: '3D 建模', to: 'tech', tone: 'alt' },
    { en: 'ANIMATION', cn: '动画制作', to: 'film', tone: '' },
    { en: 'ILLUSTRATION', cn: '二次元绘画', to: 'art', tone: 'alt2' },
    { en: 'PHOTO', cn: '摄影', to: 'art', tone: 'alt', tab: 'photo' },
  ],

  fit: [
    { label: 'RM 相关背景', title: '现役 RMer，2026 赛季哨兵研发代表',
      text: '港科大 RM 战队算法组成员，负责哨兵的导航和决策。正在推进基于 MuJoCo 和 Filament 的 RM 赛场仿真，包含哨兵导航及自瞄仿真。' },
    { label: '自媒体与影像', title: '<em>2.7 万</em> + <em>1.5 万</em> 粉丝，最火视频全网 <em>200 万+</em> 播放',
      text: '熟悉摄影和动画制作。B 站近期忙于比赛没有维护，下一阶段计划发科技类长视频；小红书以绘画为主。' },
    { label: '研究方向', title: '资深铲屎官 + 究极猫奴',
      text: '方向是智能宠物、强化学习和情感陪伴。正在 MuJoCo 里训练四足宠物的教师步态；也独立做过 RL 六足机器人，机械设计、嵌入式和算法到 sim2real 都是自己完成的。' },
  ],

  /* 右侧单独的大卡片：能给 Beni 做的内容 */
  beni: {
    title: '为 Beni 规划的内容',
    ideas: [
      { title: 'Beni 进 RM 赛场', text: '把 Beni 导入我自研的 RM 赛场仿真，在隧道和台阶间跑酷。', where: 'B 站' },
      { title: 'RMer 拆解 Beni', text: '用 RMer 的视角讲空翻、追逐和跳台阶背后的 RL 串联腿。', where: 'B 站长视频' },
      { title: 'DIY Beni 配件', text: '给 Beni 设计可动眼皮、表情功能这类配件，从建模到打印都自己做。', where: 'B 站 / 小红书' },
      { title: '和猫猫互动', text: '让 Beni 和我家猫见面，记录两只「小家伙」的相处日常。', where: '小红书 / B 站' },
      { title: 'Beni 主题绘画', text: '把 Beni 画进二次元插画和角色设定。', where: '小红书' },
    ],
  },

  tech: [
    { id: 'sable', title: '强化学习四足宠物', short: '四足宠物', rail: 'SABLE', titleLong: '强化学习四足宠物 SABLE', en: 'RL QUADRUPED PET', state: '训练中', date: '近期',
      cover: { type: 'image', src: 'media/sable-cover.jpg' },
      desc: '在小体积约束下寻找"够用"的硬件：机械结构和强化学习同步迭代，用训练结果判断动作做不到，是策略还没学好，还是关节结构、力矩、速度或活动范围不够，再指导下一轮硬件调整。',
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
          desc: 'SABLE 以鼬科动物为原型，目标是做一只能陪伴人的小型四足宠物。' },
        { type: 'image', src: 'media/sable-sketch.jpg', cap: '概念手稿',
          desc: '记录四足宠物的外形构想与身体比例。' },
        { type: 'image', src: 'media/sable-leg.png', cap: '腿部结构模型',
          desc: '腿部结构模型，展示关节位置、连杆布局与尺寸标注。' },
        { type: 'image', src: 'media/sable-actuator-comparison.jpg', cap: '腿部机构与电机实物',
          desc: '腿部机构与电机的实物照片，旁边放有卡尺。' },
        { type: 'image', src: 'media/sable-linear-actuators.jpg', cap: '测试中的步进电机',
          desc: '用于项目测试的多款步进电机。' },
        { type: 'video', src: 'media/sable-early-joint-length-test.mp4', cap: '早期关节长度测试', thumbAt: 1,
          desc: '在 MuJoCo 中测试关节长度比例；简化的胶囊体四足模型从站立逐渐塌下、趴倒。' },
      ] },
    { id: 'sim', title: 'RM 赛场仿真', short: '赛场仿真', rail: 'SIMULATION', titleLong: '端到端 RM 赛场仿真', en: 'RM ARENA SIMULATION', state: '研发中', date: '近期',
      /* 第一人称视频整体偏暗，竖栏封面用亮一些的灯光渲染；点开后仍先放第一人称视频 */
      cover: { type: 'image', src: 'media/sim-7.jpg' },
      desc: '我正在推进端到端的 RM 赛场仿真，基于 MuJoCo 和 Filament 渲染器，包含哨兵导航及自瞄仿真，并且自研了灯光合成器。',
      fields: [['技术', 'MuJoCo / Filament'], ['现在', '正在推进导航及自瞄仿真'], ['下一步', '接入 RL 测试']],
      beni: '后续计划把 Beni 导入赛场，在仿真里跑酷。',
      media: [
        { type: 'video', src: 'media/sim-1.mp4', cap: '自瞄视角：移动与射击仿真', thumbAt: 3,
          desc: '展示机器人移动和射击时的自瞄相机视角，并非操作手视角。' },
        { type: 'video', src: 'media/sim-2.mp4', cap: '赛场场景浏览', thumbAt: 1,
          desc: '通过视角移动展示仿真赛场的场地结构与灯光。' },
        { type: 'video', src: 'media/sim-nav.mp4', cap: '哨兵导航仿真', thumbAt: 12,
          desc: '左上是赛场俯视地图，主画面展示 RoboMaster 2026 赛场中的哨兵导航仿真，目前仍在推进中。' },
        { type: 'video', src: 'media/sim-3.mp4', cap: '赛场仿真画面', thumbAt: 2,
          desc: '展示赛场模型、场内视角与灯光效果。' },
        { type: 'image', src: 'media/sim-4.jpg', cap: '赛场模型总览' },
        { type: 'image', src: 'media/sim-5.jpg', cap: '自研实时灯光合成',
          desc: '展示自研灯光合成器对装甲板灯条与数字区域的显示效果。' },
        { type: 'video', src: 'media/sim-6.mp4', cap: '高斯泼溅测试', thumbAt: 1,
          desc: '高斯泼溅（Gaussian Splatting）的初步测试画面。' },
        { type: 'image', src: 'media/sim-7.jpg', cap: '灯光渲染效果' },
      ] },
    { id: 'hex', title: 'RL 仿生六足蜘蛛', short: '六足蜘蛛', rail: 'HEXAPOD', titleLong: 'RL 仿生六足蜘蛛机器人', en: 'RL HEXAPOD SPIDER', state: '已完成', done: true, date: '2025.04 - 2025.06',
      cover: { type: 'image', src: 'media/hex-1.jpg' },
      desc: '机械设计、嵌入式代码、RL 训练和 sim2real 均由我独立完成。机械上投入最多的是紧凑收纳和大范围活动：通过腿部构型和关节布局，让六条腿收拢后贴近机身，展开后仍保留较大的活动范围。那是一年前，AI 还没有现在这么智能；RL 部分基于开源框架，针对六足结构做了二次开发和训练。照片为本人拍摄。',
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
  /* link 会显示在说明下面 */
  lab: [
    { title: '3D 打印可变形名片', tag: '3D 打印', desc: '一张能折出来的名片：平时是名片，掰开就是手机支架。模型已经发在 MakerWorld。', cover: 0,
      link: { href: 'https://makerworld.com/zh/models/1128870-foldable-business-card-and-phone-stand#profileId-1128739', text: 'MakerWorld 模型页' }, items: [
      { type: 'image', src: 'media/card-personal.jpg', note: '实物' },
    ] },
    { title: 'LT8619C 双目 AR', tag: '硬件', desc: '基于 LT8619C 驱动 ECX335S 的双目 AR 项目，展示结构模型、驱动板设计与实物。', cover: 0, items: [
      { type: 'image', src: 'media/ar-cad.jpg', note: '眼镜模组 CAD' },
      { type: 'image', src: 'media/ar-render.jpg', note: '驱动板 3D 预览' },
      { type: 'image', src: 'media/ar-layout.jpg', note: 'PCB 布线' },
      { type: 'image', src: 'media/ar-photo.jpg', note: '驱动板实物' },
    ] },
    { title: '微型电机驱动板', tag: '硬件', desc: '微型闭环直流电机驱动板，展示 PCB 设计与实物。', cover: 1, items: [
      { type: 'image', src: 'media/motor-render.jpg', note: 'PCB 3D 预览' },
      { type: 'image', src: 'media/motor-hand.jpg', note: '装到电机上的实物' },
      { type: 'image', src: 'media/motor-closeup.jpg', note: '实物细节' },
    ] },
    { title: '骰子动画', tag: '动画', desc: '和港科 UP 主合作的片头动画。', cover: 0, items: [
      { type: 'video', src: 'media/dice.mp4', note: '合作片头' },
    ] },
    { title: 'RM 战队文创', tag: '设计', desc: '给 RM 战队做的工程机器人图案和战队名片展示。', cover: 0, items: [
      { type: 'image', src: 'media/merch-engineer.jpg', note: '工程机器人图案' },
      { type: 'image', src: 'media/merch-process.jpg', note: '图案模型预览' },
      { type: 'video', src: 'media/card-enterprize.mp4', note: 'ENTERPRIZE 名片展示' },
      { type: 'video', src: 'media/card-rm.mp4', note: 'RM 战队名片实拍' },
    ] },
    { title: '三摩擦发机', tag: '机械', desc: '三摩擦发机的机械结构模型。', cover: 0, items: [
      { type: 'image', src: 'media/triple-friction-launcher.png', note: '结构模型' },
    ] },
  ],
  labAlso: '见 <a href="https://xhslink.cn/o/3qZbS1aUIce" target="_blank" rel="noopener">小红书</a>、<a href="https://space.bilibili.com/177960253" target="_blank" rel="noopener">B站</a>，还做过 cosplay 道具设计、自研电磁抬笔写字机（高中）、3D 打印机、鱼眼图传等。',

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

  /* 联系页拼贴：实拍相纸、平面贴纸与 Beni 叠放。 */
  wall: [
    { src: 'media/bubble-arena.jpg', cap: '赛场仿真', style: 'arena' },
    { src: 'media/wall-robomaster.png', cap: 'RoboMaster', style: 'rm' },
    { src: 'media/bubble-cat.jpg', cap: '我家猫的日常', style: 'cat' },
    { src: 'media/wall-cartoon-cat.png', cap: '猫咪贴纸', style: 'sticker' },
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

function video(src, opts = {}) {
  const v = el('video', { muted: true, playsInline: true, loop: true, preload: opts.preload || 'metadata' });
  v.setAttribute('muted', '');
  v.setAttribute('playsinline', '');
  v.src = opts.at != null ? `${src}#t=${opts.at}` : src;
  if (opts.auto) v.dataset.auto = '';
  if (opts.controls) v.controls = true;
  return v;
}

function mediaNode(m, opts = {}) {
  if (m.type === 'video') return video(m.src, opts);
  const img = el('img', { src: m.src, alt: m.cap || '', decoding: 'async' });
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
const heroBg = $('#heroBg');

function heroList() { return isPhone() ? CONTENT.heroVideosPhone : CONTENT.heroVideos; }

function showHero(src, animate) {
  const layer = el('div', { class: 'hb-layer' });
  const v = video(src, { preload: 'auto' });
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
  placeHeroBg();
  const v = $$('.hb-layer video', heroBg).pop();
  if (!heroIsLive()) { if (v) v.pause(); return; }
  if (v && v.paused) v.play().catch(() => {});
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
  showHero(heroList()[0], false);
}

/* ---------- 02 为什么选我 ---------- */
function buildFit() {
  const cards = $('#fitCards');
  CONTENT.fit.forEach((f, i) => {
    cards.append(el('div', { class: 'fit-card', 'data-in': '', style: `--i:${i + 1}` },
      `<small><em>${pad2(i + 1)}</em>招募要求 / ${f.label}</small><h3>${f.title}</h3><p>${f.text}</p>`));
  });
  const b = CONTENT.beni;
  $('#beniCard').innerHTML = `
    <img class="beni-pop" src="media/beni-toon.png" alt="" aria-hidden="true">
    <header><small>// FOR BENI</small><h3 id="hBeni">${b.title}</h3></header>
    <ol>${b.ideas.map((it, i) => `<li><em>${pad2(i + 1)}</em><div><b>${it.title}</b><span>${it.text}</span></div><i class="beni-where">${it.where}</i></li>`).join('')}</ol>`;
}

/* 个人档案和为什么选我共用同一个黑白背景：切到哪屏，背景元素就挪到哪屏，只解码一路视频 */
function placeHeroBg() {
  const host = deckOn && secs[cur].id === 'fit' ? $('#fitBg') : $('#profile');
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
  if (p.beni) body.append(el('p', { class: 'detail-beni', style: '--n:4' }, p.beni));
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
function runLoader(done) {
  const loader = $('#loader');
  if (reduced) { loader.remove(); done(); return; }
  const num = $('#loaderNum');
  const started = performance.now();
  const minMs = 1400;
  const maxMs = 5000;
  const tasks = [
    document.fonts ? document.fonts.load('800 40px Saira') : Promise.resolve(),
    new Promise((ok) => { const i = new Image(); i.onload = i.onerror = ok; i.src = 'media/avatar.jpg'; }),
    new Promise((ok) => { const v = $('.hb-layer video'); if (!v) return ok(); v.addEventListener('canplay', ok, { once: true }); v.addEventListener('error', ok, { once: true }); }),
  ];
  let finished = 0;
  tasks.forEach((t) => t.catch(() => {}).then(() => { finished += 1; }));
  let shown = 0;
  const tick = (now) => {
    const t = now - started;
    const real = finished / tasks.length;
    const byTime = Math.min(1, t / minMs);
    /* 跟着真实进度走；没加载完时最多走到 92% */
    const target = t >= maxMs || (real === 1 && byTime === 1) ? 1 : Math.min(.92, byTime * (.5 + real * .5));
    shown += (target - shown) * .16;
    if (target === 1 && shown > .995) shown = 1;
    loader.style.setProperty('--p', shown.toFixed(4));
    num.firstChild.nodeValue = String(Math.round(shown * 100));
    /* 色块太窄时，数字先放在色块右边，够宽了再进到色块里 */
    num.classList.toggle('is-low', shown * innerWidth < num.offsetWidth + 40);
    if (shown >= 1) {
      setTimeout(() => {
        loader.classList.add('is-done');
        done();
        setTimeout(() => loader.remove(), 560);
      }, 220);
    } else {
      requestAnimationFrame(tick);
    }
  };
  requestAnimationFrame(tick);
}

/* ---------- 启动 ---------- */
function init() {
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
    scheduleHero();
  });
}

init();
