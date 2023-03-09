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
      path: '/backend/java/java0',
      collapsable: true, // 折叠
      children: [
        { title: "对象和类", path: "/backend/java/java1" },
        { title: "字符串", path: "/backend/java/java2" },
        { title: "对象和封装", path: "/backend/java/java3" },
        { title: "继承和重写", path: "/backend/java/java4" },
        { title: "系统常用类", path: "/backend/java/java5" },
        { title: "异常和log4j", path: "/backend/java/java6" },
        { title: "集合框架", path: "/backend/java/java7" },
        { title: "多线程", path: "/backend/java/java8" },
        { title: "IO流", path: "/backend/java/java9" },
      ],
    }
]