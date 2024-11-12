import { Table, Tag } from "antd"
import { useState } from "react"

export const CustomSelectionOptions = () => {
    const [alreadySelectedRow, setAlreadySelectedRow] = useState(["1", "3"])

    const colums = [
        {
            title: "Student ID",
            dataIndex: "id"
        }, 
        {
            title: "Student Name",
            dataIndex: "name"
        },
        {
            title: "Student Grade",
            dataIndex: "grade",
            render: (tag: any) => {
                const color = tag.includes("A") ? "Green" : tag.includes("B") ? "blue" : "red"
                return <Tag color={color} key={tag}>{tag}</Tag>
            }
        }
    ]

    const dataSource = [
        {
            key: "1",
            id: 1,
            name: "Student Name 1",
            grade: "A+"
        }, 
        {
            key: "2",
            id: 2,
            name: "Student Name 2",
            grade: "B+"
        }, 
        {
            key: "3",
            id: 3,
            name: "Student Name 3",
            grade: "B"
        }, 
        {
            key: "4",
            id: 4,
            name: "Student Name 4",
            grade: "A"
        }, 
        {
            key: "5",
            id: 5,
            name: "Student Name 5",
            grade: "C"
        }, 
    ]

    return (
        <Table
            columns={colums}
            dataSource={dataSource}
            rowSelection={{
                type: "checkbox",
                selectedRowKeys: alreadySelectedRow,
                onChange: (keys: any) => {
                    setAlreadySelectedRow(keys)
                },
                onSelect: (record) => {
                    console.log("Selected row", record)
                },
                getCheckboxProps: (record) => ({
                    disabled: record.grade === "C"
                }),
                selections: [
                    Table.SELECTION_NONE,
                    Table.SELECTION_ALL,
                    Table.SELECTION_INVERT,
                    {
                        key: "even",
                        text: "Select Even Rows",
                        onSelect: (allKeys) => {
                            const selectedKeys = allKeys.filter((key: any) => parseInt(key) % 2 === 0)
                            setAlreadySelectedRow(selectedKeys.map(String))
                        }
                    },
                    {
                        key: "excellent",
                        text: "Select Students with Excellent Grade",
                        onSelect: (allKeys) => {
                            const selectedKeys = allKeys.filter((key: any) => {
                                const isExcellent = dataSource.find((student) => {
                                    return student.key === key && student.grade.includes("A")
                                })
                                return isExcellent;
                            })
                            setAlreadySelectedRow(selectedKeys.map(String))
                        }
                    }
                ]
            }}
        >

        </Table>
    )
}