/******************************
 * 宝宝成长记录 - 数据文件
 * 
 * 【重要】这是你可以随便改的地方！
 * 不用懂代码，按格式填空就行~
 ******************************/

// ==================== 宝宝基本信息 ====================
const BABY_INFO = {
    // 宝宝小名（会显示在网页标题和各处）
    nickname: "车车",
    
    // 宝宝大名
    fullName: "陈俊宇",
    
    // 宝宝生日（格式：年-月-日）
    birthday: "2024-01-01",
    
    // 宝宝小爱好（随便写，用顿号、逗号隔开都行）
    hobbies: "玩小汽车 🚗、听妈妈讲故事 📚、吃甜甜的草莓 🍓、玩躲猫猫 🐱"
};

// ==================== 成长时间线 ====================
// 每张照片一个故事，会按时间顺序排列
const TIMELINE_DATA = [
    {
        // 照片日期（格式：年-月-日）
        date: "2025-03-15",
        // 照片地址（放在photos文件夹里的图片）
        photo: "photos/baby-first-home.jpg",
        // 专属小故事（写你和宝宝的回忆）
        story: "宝宝第一次回老家，小小的一只，全家都超开心！"
    },
    {
        // 照片日期（格式：年-月-日）
        date: "2024-01-01",
        // 照片地址（放在photos文件夹里的图片）
        photo: "photos/baby-1.jpg",
        // 专属小故事（写你和宝宝的回忆）
        story: "今天是车车出生的第一天！👶 小手小脚好可爱，全家人都超级开心~"
    },
    {
        date: "2024-02-14",
        photo: "photos/baby-2.jpg",
        story: "车车的第一个情人节 💕 爸爸妈妈给你准备了小蛋糕，虽然你还不能吃哈哈~"
    },
    {
        date: "2024-03-20",
        photo: "photos/baby-3.jpg",
        story: "今天车车会翻身啦！🎉 像个小企鹅一样翻过来翻过去，太萌了~"
    },
    {
        date: "2024-05-01",
        photo: "photos/baby-4.jpg",
        story: "第一次出门晒太阳 ☀️ 车车看什么都好奇，小眼睛滴溜溜的转~"
    },
    {
        date: "2024-06-15",
        photo: "photos/baby-5.jpg",
        story: "车车半岁啦！🎂 抓周抓到了小汽车，难怪小名叫车车呢~"
    },
    {
        date: "2024-08-08",
        photo: "photos/baby-6.jpg",
        story: "今天车车第一次叫妈妈！👩 虽然不太清楚，但是妈妈激动得哭了~"
    },
    {
        date: "2024-10-01",
        photo: "photos/baby-7.jpg",
        story: "国庆小长假，带车车去公园玩 🌳 看到小鸭子激动得直拍手~"
    },
    {
        date: "2024-12-25",
        photo: "photos/baby-8.jpg",
        story: "车车的第一个圣诞节 🎄 收到了好多礼物，最喜欢那个红色小汽车！"
    }
];

// ==================== 相册分类 ====================
const ALBUMS_DATA = [
    {
        // 相册名称
        title: "🍼 0-6个月",
        // 相册简介
        description: "刚出生的小车车，小小的萌萌的~",
        // 封面照片
        cover: "photos/baby-first-home.jpg",
        // 背景音乐（可选，放在music文件夹里）
        music: "music/baby-music-1.mp3",
        // 这个相册里的所有照片
        photos: [
            { src: "photos/baby-first-home.jpg", caption: "第一次回老家" },
            { src: "photos/baby-1.jpg", caption: "出生第一天" },
            { src: "photos/baby-2.jpg", caption: "第一个情人节" },
            { src: "photos/baby-3.jpg", caption: "学会翻身" },
            { src: "photos/baby-4.jpg", caption: "第一次出门" }
        ]
    },
    {
        title: "🎂 6-12个月",
        description: "半岁后的车车越来越活泼，学会好多新本领！",
        cover: "photos/album-6-12.jpg",
        music: "music/baby-music-2.mp3",
        photos: [
            { src: "photos/baby-5.jpg", caption: "半岁生日快乐" },
            { src: "photos/baby-6.jpg", caption: "第一次叫妈妈" },
            { src: "photos/baby-7.jpg", caption: "国庆出游" },
            { src: "photos/baby-8.jpg", caption: "第一个圣诞节" }
        ]
    },
    {
        title: "🚗 1-2岁",
        description: "车车会走路啦！变成了好奇宝宝~",
        cover: "photos/album-1-2.jpg",
        music: "music/baby-music-3.mp3",
        photos: [
            { src: "photos/baby-9.jpg", caption: "一岁生日" },
            { src: "photos/baby-10.jpg", caption: "学走路" },
            { src: "photos/baby-11.jpg", caption: "第一次去海边" },
            { src: "photos/baby-12.jpg", caption: "两岁生日" }
        ]
    },
    {
        title: "🌟 美好瞬间",
        description: "各种值得纪念的特别时刻~",
        cover: "photos/album-special.jpg",
        music: "music/baby-music-4.mp3",
        photos: [
            { src: "photos/special-1.jpg", caption: "全家福" },
            { src: "photos/special-2.jpg", caption: "第一次吃辅食" },
            { src: "photos/special-3.jpg", caption: "和奶奶玩" },
            { src: "photos/special-4.jpg", caption: "睡觉的小天使" }
        ]
    }
];

// ==================== 使用说明（不会代码也能改！）====================
/*

【怎么加新照片？】

第一步：把照片放进文件夹
  - 时间线照片 → 放到 photos/ 文件夹
  - 相册照片 → 也放到 photos/ 文件夹  
  - 音乐文件 → 放到 music/ 文件夹

第二步：在这个文件里添加记录
  
  加时间线照片：
  复制下面这段，改日期、照片名、故事就行：
  
  {
      date: "2024-12-31",
      photo: "photos/你的照片名.jpg",
      story: "这里写你的小故事~"
  },
  
  加相册照片：
  找到你想加的相册（比如"1-2岁"那个），
  在 photos: [ ] 里面加一行：
  
  { src: "photos/新照片.jpg", caption: "照片说明" },

第三步：保存这个文件，刷新网页就看到了！

【小贴士】
- 照片名最好用英文或数字，比如 baby-13.jpg
- 日期格式一定要是 年-月-日，比如 2024-06-01
- 想删照片？直接把那一行删掉就行
- 想改故事？直接改文字部分
- 音乐不是必须的，不想放音乐就把 music: "" 留空

*/