# 项目介绍
::: tip 提示
因为本人审美有限，该项目中页面实际效果展示已经耗费本人所有艺术天赋在里面。
<a href="https://emoji.gg/emoji/3341-sadgi"><img src="https://cdn3.emoji.gg/emojis/3341-sadgi.png" width="64px" height="64px" alt="Sadgi"></a>
:::
## 项目名
yeb(B站自学项目)
>该项目基于SpringBoot+Vue进行开发，项目目前主要完成了人事管理模块、部门管理模块和系统管理模块，整合了SpringSecurity来实现权限管理。


## 技术栈
- 前端：**Vue2**
- 后端：**SpringBoot**、**SpringSecurity**、**Mybatis-Plus**
- 数据库： **Mysql**、**Redis**
- 组件库： **Elemnt-UI**

## 项目预览
### 员工页面
- 支持高级搜索
- 支持模糊查询
- 支持分页查询
- 支持CRUD员工数据
![](/image/javapre1.png)

![](/image/javapre7.png)

### 薪资页面
- 支持修改工资账套数据
- 支持给员工设定具体的账套数据

![](/image/javapre2.png)

### 部门页面
- 支持CRUD部门数据

![](/image/javapre3.png)

![](/image/javapre4.png)

### 权限组设置页面
- 支持对指定角色设置特别的访问权限

![](/image/javapre5.png)
***
### 角色设置
- 支持对指定的用户设置角色，并且可以设置多个角色
![](/image/javapre6.png)
***

### 部分代码展示
 
#### 添加部门后端代码
```java
@ApiOperation(value = "添加部门")
@PostMapping("/") 
public RespBean addDepartment(@RequestBody Department department){
    // 插入部门信息并返回自增主键ID
    Integer id = departmentService.insertDepartment(department);
    // 根据父部门ID查询父部门的depPath
    String pDepPath = departmentService.selectDepPathByParentId(department.getParentId());
    // 拼接当前部门的depPath
    String depPath = pDepPath + "." + id;
    // 更新当前部门的depPath
    Integer depPathResult = departmentService.updateDepPath(id, depPath);
    // 设置父部门的isParent字段为true
    Integer isParentResult = departmentService.setParentIsParent(department.getParentId());
    if(depPathResult == 1 && isParentResult == 1){
        return RespBean.success("添加部门成功！");
    }
    return RespBean.error("添加部门失败！");
}
```

#### 根据ID查询部门并添加到Redis中
```java
public List<Menu> getMenuByAdminID() {
    Integer adminId = ((Admin)SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getId();
    ValueOperations<String, Object> valueOperations = redisTemplates.opsForValue();
    //从redis获取菜单数据
    List<Menu> menus = (List<Menu>)valueOperations.get("menu_" + adminId);
    //如果为空去数据空查询
    if(CollectionUtils.isEmpty(menus)){
        menus = menuMapper.getMenusByAdminID(adminId);
        //将数据添加到redis中
        valueOperations.set("menu_" + adminId,menus);
    }
    return menus;
}
```

#### 登录功能业务
```java
public RespBean login(String username, String password, String code, HttpServletRequest request) {
    //校验验证码
    String captcha = (String) request.getSession().getAttribute("captcha");
    if(StringUtils.isEmpty(code) || !captcha.equalsIgnoreCase(code) ){
        return RespBean.error("验证码错误！");
    }
    //获取userDetails,验证账号密码
    UserDetails userDetails = userDetailsService.loadUserByUsername(username);
    if(userDetails == null || !passwordEncoder.matches(password,userDetails.getPassword())){
        return RespBean.error("用户名或密码不正确,明文密码："+ passwordEncoder.encode(password) + ",加密密码:" + userDetails.getPassword());
    }
    //判断账号是否被禁用
    if(!userDetails.isEnabled()){
        return RespBean.error("账号被禁用，请联系管理员");
    }
    //更新security登录用户对象
    UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());
    //放入security全局中
    SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
    //生成Token
    String token = jwtTokenUntil.generateToken(userDetails);
    Map<String,String> tokenMap = new HashMap<>();
    tokenMap.put("token",token);
    tokenMap.put("tokenHead",tokenHead);
    return RespBean.success("登录成功",tokenMap);
}
```
