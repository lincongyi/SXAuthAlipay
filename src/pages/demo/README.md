## v3 网证标识加密

### 主体流程功能

#### 1.生成 2 位 16 进制 sm4Key，使用 sm4Key 对用户明文数据进行加密

#### 2.格式化处理待提交的数据，并在签名后提交

#### 3.得到响应数据，先进行验签

#### 4.验签通过后，使用 sm4Key 对加密数据进行解密，返回明文信息

### 具体参数示例

#### publicKey：公钥-用于 sm2 验签

#### privateKey：私钥-用于 sm2 签名

#### publicKeyPlatform：平台公钥-用于 sm2 加密 sm4key

#### sm4Key：32 位 16 进制字符串，用于加密明文数据

#### sm4EncryptKey：加密后的 sm4Key

#### requestId：32 位 16 进制字符串，请求标识，标记当前请求唯一性

#### timestamp：当前时间戳

#### formatterFn：格式化数据处理函数，对参数进行排序，并按照 formData 形式排列参数
