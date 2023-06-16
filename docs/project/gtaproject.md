# 项目介绍
>alt:V是一个由社区开发的GTA 5多人模式平台。它允许玩家创建自己的多人服务器并自定义游戏体验。玩家可以通过自定义脚本和插件来改变规则、添加功能和创建新的游戏模式。alt:V具有灵活性和扩展性，支持自定义车辆、武器、角色等。

## 技术栈
- 前端：**Vue3**
- 后端：**Node.Js**、**TypeScript**
- 数据库：**MongoDB**

## 项目预览

### 效果展示

![](/image/gtapre6.png)
<center>登录页面</center>

***
![](/image/gtapre4.png)
<center>角色选择页面展示</center>

***
![](/image/gtapre1.png)
<center>背包系统展示</center>

***
![](/image/gtapre2.png)
<center>车速表效果展示</center>

***
![](/image/gtapre3.png)
<center>对话框效果展示</center>

***
![](/image/gtapre5.png)
<center>选择框效果展示</center>


## 部分代码展示

#### 添加自定义物品
```javascript
const PLUGIN_NAME = "police-plugin"

async function addPoliceWeapon() {
    const itemRegister = {
        ...policeItem.policeEquipment
    }

    for (const item of policeItem.policeEquipment) {
        await Athena.systems.inventory.factory.upsertAsync(item);
    }
}

Athena.systems.plugins.registerPlugin(PLUGIN_NAME, () => {
    InternalFunctions.init();
    addPoliceWeapont();
});
```
***
#### 封装事件
::: tip
可以理解为后端接口URL地址
:::
```javascript
export const PoliceEvents = {
    toClient: {
        OpenDutyMenu: "police:open:duty:menu",
        ChangeUnfirom: "to:client:change:unifrom",
        OpenEquipmentMenu: "police:open:equipment:menu",
    },
    toServer: {
        SetPoliceUniform: "set:police:uniform",
        OnDuty: "police:on:duty",
        GiveWeapon: "police:equipement:weapon"
    }
}
```
#### 客户端与服务端通信

**服务器端**

```javascript
static playerPressKeyInDutyPoint(player: alt.Player) {
    alt.emitClient(player, PoliceEvents.toClient.OpenDutyMenu);
}
```

**客户端**
```javascript
async function policeDutyQuestion(player: alt.Player) {
    const questionInfos = {
        placeholder: '有什么需要?',
        buttons: {
            accept: '好的长官，我现在奉命开开始执勤',
            decline: '长官，我的执勤已经结束',
        },
        blur: true,
        darken: false,
        hideHud: false,
    };

    try {
        const response = await AthenaClient.rmlui.question.create(questionInfos);
        if (response) {
            alt.emitServer(PoliceEvents.toServer.OnDuty, true);
        }
    } catch (error) {
        console.error('创建问题时发生错误：', error);
    }
}
alt.onServer(PoliceEvents.toClient.OpenDutyMenu, policeDutyQuestion)
```