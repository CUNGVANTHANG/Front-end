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

### 2. Input

```tsx
<Input placeholder='Name' allowClear maxLength={10} prefix={<UserOutlined />}></Input>
```

Trong đó `<UserOutlined />` là logo của thư viện

```
<Input.Search placeholder='Name' maxLength={10} prefix={<UserOutlined />}></Input.Search>
```

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

```tsx
const fruits: string[] = ['Apple', 'Banana', 'Orange', 'Grapes']
...
...
<p>Which is your favorite fruits?</p>
<Select mode='multiple' maxTagCount={2} placeholder="Select fruit" style={{width: "100%"}}>
  {fruits.map(fruit => <Select.Option key={fruit} value={fruit}>{fruit}</Select.Option>)}
</Select>
```

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

### 5. Alert

```tsx
<Alert message="Form submitted successfully" type="success" showIcon closable />
```

### 6. Table

```tsx
<Table
  dataSource={dataTable}
  columns={columns}
>
</Table>
```

### 7. DatePicker, TimePicker

```tsx
<DatePicker picker="date" />
<DatePicker.RangePicker picker="date" />
<TimePicker />
```

### 8. Loading

```tsx
const [loading, setLoading] = useState(false)
...
...
<Spin spinning={loading} />
```

### 9. Progress

```tsx
<Progress type='circle' percent={33} strokeColor="red" />
```

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
