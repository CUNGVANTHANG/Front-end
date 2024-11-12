import { Table } from "antd"
import { useEffect, useState } from "react"

export const PaginationSortingFilter = () => {
    const [loading, setLoading] = useState(false)
    const [dataSource, setDataSource] = useState([])
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)

    useEffect(() => {
        setLoading(true)
        
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => {
                setDataSource(data)
            })
            .catch(error => {
                console.log('Error fetching data', error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    const columns = [
        {
            key: "1",
            title: "ID",
            dataIndex: "id"
        },
        {
            key: "2",
            title: "User ID",
            dataIndex: "userId",
            sorter: (record1: any, record2: any) => record1.userId - record2.userId,
        },
        {
            key: "3",
            title: "Status",
            dataIndex: "completed",
            render: (completed: boolean) => {
                return <p>{completed ? 'Completed' : "In progress"}</p>
            },
            filters: [
                {text: "Completed", value: true},
                {text: "In progress", value: false}
            ],
            onFilter: (value: any, record: any) => record.completed === value
        }
    ]

    return (
        <Table
            loading={loading}
            columns={columns}
            dataSource={dataSource}
            pagination={{ 
                current: page, 
                pageSize: pageSize,
                onChange: (page, pageSize) => {
                    setPage(page)
                    setPageSize(pageSize)
                } 
            }}
        >

        </Table>
    )
}