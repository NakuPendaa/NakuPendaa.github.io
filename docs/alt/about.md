# 客户端与服务端通信

## 常用函数（加粗为常用）
::: warning 警告
alt.emitServer方法会默认传递Player对象，无需再次传递避免拿不到对应的参数！
:::

| 事件               | 用途             | 发送/接收 | 客户端接收    | 服务端/客户端接收    | 使用位置   |
| ------------------| ----------------| --------- | --------------| --------------| ---------- |
| **alt.emit**           | 发送事件        | 发送      | -             | alt.on        | 服务端/客户端 |
| **alt.on**             | 接收事件        | 接收      | alt.emit      | alt.emit      | 服务端/客户端 |
| alt.off            | 停止监听事件    | -         | -             | -             | 服务端/客户端 |
| **alt.onServer**       | 接收来自服务端的事件 | 接收 | -             | alt.emitClient | 客户端     |
| alt.offServer      | 停止监听来自服务端的事件 | - | -             | -             | 客户端     |
| **alt.emitClient**     | 向特定客户端发送事件 | 发送 | alt.onServer  | -             | 服务端     |
| alt.emitClientRaw  | 向特定客户端发送事件（快速） | 发送 | -       | -             | 服务端     |
| **alt.emitAllClients** | 向所有客户端发送事件 | 发送   | alt.onServer  | -             | 服务端     |
| alt.emitAllClientsRaw | 向所有客户端发送事件（快速） | 发送 | -     | -             | 服务端     |
| **alt.onClient**       | 接收来自客户端的事件 | 接收 | alt.emitServer| -             | 服务端     |
| alt.offClient      | 停止监听来自客户端的事件 | - | -             | -             | 服务端     |
| **alt.emitServer**     | 向服务端发送事件 | 发送      | -             | alt.onClient  | 客户端     |
| alt.emitServerRaw  | 向服务端发送事件（快速） | 发送 | -           | -             | 客户端     |

