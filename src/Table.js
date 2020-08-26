import React, { Component } from 'react'
import { Table, Button, Space, Tag, Input, Typography, Select } from 'antd';
import { SearchOutlined, ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';

const { Text } = Typography;
const { Option } = Select;

let theList = [
  { text: '12 Gauge Shot', value: '12 Gauge Shot' },
  { text: '12 Gauge Slugs', value: '12 Gauge Slugs' },
  { text: '20 Gauge', value: '20 Gauge' },
  { text: '9x18mm', value: '9x18mm' },
  { text: '7.62x25mm', value: '7.62x25mm' },
  { text: '9x19mm', value: '9x19mm' },
  { text: '.45', value: '.45' },
  { text: '9x21mm', value: '9x21mm' },
  { text: '5.7x28 mm', value: '5.7x28 mm' },
  { text: '4.6x30 mm', value: '4.6x30 mm' },
  { text: '9x39mm', value: '9x39mm' },
  { text: '.366', value: '.366' },
  { text: '5.45x39 mm', value: '5.45x39 mm' },
  { text: '5.56x45 mm', value: '5.56x45 mm' },
  { text: '7.62x39 mm', value: '7.62x39 mm' },
  { text: '7.62x51 mm', value: '7.62x51 mm' },
  { text: '7.62x54R', value: '7.62x54R' },
  { text: '12.7x55 mm', value: '12.7x55 mm' },
  { text: 'Mounted Weapons', value: 'Mounted Weapons' },
  { text: 'Other', value: 'Other' },
]




export default class Mytable extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
    children: []
  };

  componentDidMount() {
    let temp = []
    theList.map((list) => (
     temp.push(<Option key={list.value}>{list.value}</Option>)
    ))

    this.setState({
      children: temp
    })
  }

  handleChange = (pagination, filters, sorter) => {
    //console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
    console.log(this.state.filteredInfo)
    console.log(filters)
  };

  handleFilter = (pagination, filters, sorter) => {
    //console.log('Various parameters', pagination, filters, sorter);
    let temp = []
    filters.map(t=>temp.push(t.value))
    let finalFilter = {
      AmmoName: null,
      Type: temp
    }
    
    this.setState({
      filteredInfo: finalFilter,
    });
    console.log(finalFilter)
    //console.log(filters)
  };


  clearAll = () => {
    let temp = []
    theList.map((list) => (
     temp.push(<Option key={list.value}>{list.value}</Option>)
    ))

    this.setState({
      filteredInfo: null,
      sortedInfo: null,
      searchText: '',
      children: temp
    });
  };

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({});
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined style={{ marginRight: '10px' }} />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
          text
        ),
  });


  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};

    const columns = [
      {
        title: 'Ammo Type',
        dataIndex: 'Type',
        key: 'Type',
        width: 110,
        //fixed: 'left',
        //filters: theList,
        filteredValue: filteredInfo.Type || null,
        onFilter: (value, record) => record.Type.includes(value),


        //...this.getColumnSearchProps('Type'),
      },
      {
        title: 'Ammo Name',
        dataIndex: 'AmmoName',
        key: 'AmmoName',
        filteredValue: filteredInfo.AmmoName || null,
        onFilter: (value, record) => record.AmmoName.includes(value),
        ...this.getColumnSearchProps('AmmoName'),
        width: 150,
        //fixed: 'left'
      },
      {
        title: 'Flesh Damage',
        dataIndex: 'Damage',
        key: 'Damage',
        sorter: (a, b) => a.Damage - b.Damage,
        sortOrder: sortedInfo.columnKey === 'Damage' && sortedInfo.order,
        //ellipsis: true,
        width: 100
      },
      {
        title: 'Penetration',
        dataIndex: 'Penetration',
        key: 'Penetration',
        sorter: (a, b) => a.Penetration - b.Penetration,
        sortOrder: sortedInfo.columnKey === 'Penetration' && sortedInfo.order,
        width: 90
      },
      {
        title: 'Armor Damage',
        dataIndex: 'Adamage',
        key: 'Adamage',
        sorter: (a, b) => a.Adamage - b.Adamage,
        sortOrder: sortedInfo.columnKey === 'Adamage' && sortedInfo.order,
        width: 100
      },
      {
        title: 'Frag. Chance',
        dataIndex: 'FragChance',
        key: 'FragChance',
        sorter: (a, b) => a.FragChance - b.FragChance,
        sortOrder: sortedInfo.columnKey === 'FragChance' && sortedInfo.order,
        width: 85,
        render: (text) => {
          let changePercent = text * 100 + "%"
          return (<Text key='test'>{changePercent}</Text>)
        }
      },
      {
        title: '1',
        dataIndex: 'c1',
        key: 'c1',
        width: 55,
        render: (text) => {
          let color;
          if (text < 3) {
            color = '#873917'
          } else if (text === 3) {
            color = '#756228'
          } else if (text === 4) {
            color = '#ffc000'
          } else if (text === 5) {
            color = '#1f8240'
          } else if (text === 6) {
            color = '#87d068'
          }
          return (<Tag color={color} key={'tempp'}>
            {text}
          </Tag>)
        },
        //ellipsis: true,
      },
      {
        title: '2',
        dataIndex: 'c2',
        key: 'c2',
        width: 55,
        render: (text) => {
          let color;
          if (text < 3) {
            color = '#873917'
          } else if (text === 3) {
            color = '#756228'
          } else if (text === 4) {
            color = '#ffc000'
          } else if (text === 5) {
            color = '#1f8240'
          } else if (text === 6) {
            color = '#87d068'
          }
          return (<Tag color={color} key={'tempp'}>
            {text}
          </Tag>)
        },
        //ellipsis: true,
      },
      {
        title: '3',
        dataIndex: 'c3',
        key: 'c3',
        width: 55,
        render: (text) => {
          let color;
          if (text < 3) {
            color = '#873917'
          } else if (text === 3) {
            color = '#756228'
          } else if (text === 4) {
            color = '#ffc000'
          } else if (text === 5) {
            color = '#1f8240'
          } else if (text === 6) {
            color = '#87d068'
          }
          return (<Tag color={color} key={'tempp'}>
            {text}
          </Tag>)
        },
        //ellipsis: true,
      },
      {
        title: '4',
        dataIndex: 'c4',
        key: 'c4',
        width: 55,
        render: (text) => {
          let color;
          if (text < 3) {
            color = '#873917'
          } else if (text === 3) {
            color = '#756228'
          } else if (text === 4) {
            color = '#ffc000'
          } else if (text === 5) {
            color = '#1f8240'
          } else if (text === 6) {
            color = '#87d068'
          }
          return (<Tag color={color} key={'tempp'}>
            {text}
          </Tag>)
        },
        //ellipsis: true,
      },
      {
        title: '5',
        dataIndex: 'c5',
        key: 'c5',
        width: 55,
        render: (text) => {
          let color;
          if (text < 3) {
            color = '#873917'
          } else if (text === 3) {
            color = '#756228'
          } else if (text === 4) {
            color = '#ffc000'
          } else if (text === 5) {
            color = '#1f8240'
          } else if (text === 6) {
            color = '#87d068'
          }
          return (<Tag color={color} key={'tempp'}>
            {text}
          </Tag>)
        },
        //ellipsis: true,
      },
      {
        title: '6',
        dataIndex: 'c6',
        key: 'c6',
        width: 55,
        render: (text) => {
          let color;
          if (text < 3) {
            color = '#873917'
          } else if (text === 3) {
            color = '#756228'
          } else if (text === 4) {
            color = '#ffc000'
          } else if (text === 5) {
            color = '#1f8240'
          } else if (text === 6) {
            color = '#87d068'
          }
          return (<Tag color={color} key={'tempp'}>
            {text}
          </Tag>)
        },
        //ellipsis: true,
      },
    ];
    return (
      <div style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto' }}>
        
        <br />
        <div>
          <Text code>Ammo Filter:</Text>
          <Select
          mode="multiple"
          style={{ width: '50%' }}
          placeholder="Select an Ammo Type to filter"
          onChange={this.handleFilter}
        >
          {this.state.children}
        </Select>
        </div>
        
        <br />
        <Table columns={columns} dataSource={this.props.data} scroll={{ x: 1500 }} onChange={this.handleChange} />
      </div>
    );
  }
}