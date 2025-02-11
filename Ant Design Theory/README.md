# Ant Design Theory

## Reference

https://ant.design/docs/react/introduce

## Install

```
npm install antd --save
yarn add antd
```

## Using

Import component bất kỳ vào trong `{}` từ `antd`

```
import {} from `antd`
```
## I. Basic
### 1. Button

```tsx
<Button type="primary">My first Button</Button>
```

![image](https://github.com/user-attachments/assets/7ffbe4c9-5798-4c30-ae44-29aee4dd8401)

### 2. Input

```tsx
<Input placeholder='Name' allowClear maxLength={10} prefix={<UserOutlined />}></Input>
```

Trong đó `<UserOutlined />` là logo của thư viện

![image](https://github.com/user-attachments/assets/83c71a75-8ef8-4e88-b76c-d0d12ae11534)

```
<Input.Search placeholder='Name' maxLength={10} prefix={<UserOutlined />}></Input.Search>
```

![image](https://github.com/user-attachments/assets/11acac7a-ffb1-4378-913f-657898312540)

### 3. Select

```tsx
const fruits: string[] = ['Apple', 'Banana', 'Orange', 'Grapes']
...
...
<p>Which is your favorite fruit?</p>
<Select placeholder="Select fruit" style={{width: "50%"}}>
  {fruits.map(fruit => <Select.Option key={fruit} value={fruit}>{fruit}</Select.Option>)}
</Select>
```

![image](https://github.com/user-attachments/assets/63c9c0d6-f741-43f7-8901-1c7bd37a3966)

```tsx
const fruits: string[] = ['Apple', 'Banana', 'Orange', 'Grapes']
...
...
<p>Which is your favorite fruits?</p>
<Select mode='multiple' maxTagCount={2} placeholder="Select fruit" style={{width: "100%"}}>
  {fruits.map(fruit => <Select.Option key={fruit} value={fruit}>{fruit}</Select.Option>)}
</Select>
```

![image](https://github.com/user-attachments/assets/6289c7d7-507d-46e9-b163-d1ea9f914827)


### 4. Form

```tsx
const handleOnSubmit = (value: FormValues) => {
    console.log('Form submitted', value)

    // Notify
    setTimeout(() => {
      setShowAlert(true)
      message.success('Form submitted successfully')
    }, 2000)
}
...
...
<Form layout='vertical' onFinish={handleOnSubmit}>
  <Form.Item label="User name" name="username">
    <Input placeholder='User name'></Input>
  </Form.Item>
  <Form.Item label="Password" name="password">
    <Input.Password placeholder='Password'></Input.Password>
  </Form.Item>
  <Form.Item>
    <Button block type='primary' htmlType='submit'>Login</Button>
  </Form.Item>
</Form>
```

![image](https://github.com/user-attachments/assets/04f56acd-543d-4e65-871a-b9a6e429be52)


### 5. Alert

```tsx
<Alert message="Form submitted successfully" type="success" showIcon closable />
```

![image](https://github.com/user-attachments/assets/95080f29-6ef7-44e3-bec8-68f9a33e7e98)

### 6. Table

```tsx
<Table
  dataSource={dataTable}
  columns={columns}
>
</Table>
```

![image](https://github.com/user-attachments/assets/529233cc-d66e-485c-bd05-3036489291e8)


### 7. DatePicker, TimePicker

```tsx
<DatePicker picker="date" />
<DatePicker.RangePicker picker="date" />
<TimePicker />
```

![image](https://github.com/user-attachments/assets/0423fadb-62fd-4335-84f9-77f6b3fca0f5)


### 8. Loading

```tsx
const [loading, setLoading] = useState(false)
...
...
<Spin spinning={loading} />
```

![image](https://github.com/user-attachments/assets/9a6c55a2-c946-4e6e-8f1d-02cbb9183712)


### 9. Progress

```tsx
<Progress type='circle' percent={33} strokeColor="red" />
```

![image](https://github.com/user-attachments/assets/fec72d18-4fd6-4b06-9e57-d6a8da671145)


### 10. Icon

Install:

```
npm install @ant-design/icons --save
yarn add @ant-design/icons
```

```
<PieChartFilled style={{color: "purple", fontSize: 100}} />
<AppleFilled style={{color: "green", fontSize: 100}} />
<LoadingOutlined spin style={{color: "red", fontSize: 100}} />
<HeartIcon style={{color: "green", fontSize: 100}} />
<Button icon={<LogoutOutlined />}>Button with Custom Icon</Button>
```

## II. Custom
