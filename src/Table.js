import React, { Component } from 'react'
import { Table, Button, Space, Tag, Input, Typography } from 'antd';
import { SearchOutlined, ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';

const { Text } = Typography;

export default class Mytable extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
  };

  handleChange = (pagination, filters, sorter) => {
    //console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };


  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
      searchText: ''
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
    this.setState({  });
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
            icon={<SearchOutlined />}
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
        filters: [
          { text: 'Joe', value: 'Joe' },
          { text: 'Jim', value: 'Jim' },
        ],
        filteredValue: filteredInfo.Type || null,
        onFilter: (value, record) => record.Type.includes(value),
        

        
        ...this.getColumnSearchProps('Type'),
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
      <div style={{width: '90%', marginLeft: 'auto', marginRight: 'auto'}}>
        <Space style={{ marginBottom: 16 }}>
          <Button onClick={this.clearAll}>Clear all filters</Button>
        </Space>
        <Table columns={columns}  dataSource={this.props.data} scroll={{ x: 1500 }} onChange={this.handleChange} />
      </div>
    );
  }
}