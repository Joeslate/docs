module.exports = [
    {
        title: '欢迎',
        path: '/',
        // collapsable: false, // 不折叠
        // children: [
        //     { title: "首页", path: "/" }
        // ]
    },
    {
      title: "Java基础",
      path: '/backend/java0',
      collapsable: true, // 折叠
      children: [
        { title: "未知", path: "/backend/java2" },
        { title: "字符串", path: "/backend/java2" }
      ],
    }
]