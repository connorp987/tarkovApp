import React from 'react'
import { Typography, Divider, Tag, Space, Button } from 'antd';
import { Link } from "react-router-dom";
import * as ROUTES from "./routes";

const { Title, Paragraph, Text } = Typography;

export default function About() {


  return (
    <Typography>
      <div style={{ marginLeft: '5%' }}>
        <Title level={2}>What am I looking at?</Title>
        <Paragraph>
          The numbers <Text code>1</Text> through <Text code>6</Text> represent each class of armor.
      </Paragraph>
        <Paragraph>
          The penetration is broken down by each armor class. And the effectiveness for each class is broken down between <Text code>0</Text> and <Text code>6</Text>. <Text code>0</Text> being pointless and <Text code>6</Text> being very effective.
      </Paragraph>
        <Paragraph>
          Penetration can be broken down even further Avg. Shots Stopped By Armor Before Killing:
        <br />
          <Space style={{ marginLeft: '1%' }} direction="vertical">
            <Text><Tag color={'#873917'} key={'tempp'}>0</Tag>= 20+</Text>
            <Text><Tag color={'#873917'} key={'tempp'}>1</Tag>= 13 to 20</Text>
            <Text><Tag color={'#873917'} key={'tempp'}>2</Tag>= 9 to 13</Text>
            <Text><Tag color={'#756228'} key={'tempp'}>3</Tag>= 5 to 9</Text>
            <Text><Tag color={'#ffc000'} key={'tempp'}>4</Tag>= 3 to 5</Text>
            <Text><Tag color={'#1f8240'} key={'tempp'}>5</Tag>= 1 to 3</Text>
            <Text><Tag color={'#87d068'} key={'tempp'}>6</Tag>&#60; 1</Text>

          </Space>
        </Paragraph>
        <Title level={3}>Credit</Title>
        <Paragraph>
          All of the data in the chart is from <Text strong>NoFoodAfterMidnight's </Text>Google Spreadsheet.
      </Paragraph>

        <Paragraph>
          <ul>
            <li>
              <a href="https://docs.google.com/spreadsheets/d/1Pp8tKScb0jB66cOCJSAlNn-iKERMXd9FVkSmSq83qn8/htmlview?pru=AAABcm3hTkQ*9npW2TNLxZHqhTC-5kK10Q#gid=64053005" target="_blank">Original Spreadsheet</a>
            </li>
            <li>
              <a href="https://docs.google.com/spreadsheets/d/1VuxGkweKB118mF1kcBmVPe-Bj_gSKGOCWyoytM4miDU/edit#gid=64053005" target="_blank">Spreadsheet Backup</a>
            </li>
          </ul>
        </Paragraph>
        <Title level={3}>Want to only view the chart?</Title>
        <Button type="primary">
          <Link style={{ textDecoration: "none" }} to={ROUTES.TABLE}>
            Click for Only Chart!
          </Link>
        </Button>
      </div>

      <Divider />


    </Typography>
  )
}