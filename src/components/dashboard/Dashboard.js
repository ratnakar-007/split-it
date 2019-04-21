import React, { Component } from 'react';
import { List } from 'antd';

const data = [
    {
        name : "Manav",
        owe : 100
    },
    {
        name : "Ratan",
        owed : 200
    },

]
class Dashboard extends Component {

    render() {
        return(
            <div>

                <List 
                    dataSource={data}
                    renderItem={item => (
                            <List.Item> 
                                <span>{item.name}</span>
                                {item.owe  ? <span>{item.owe}</span> : ""}
                                {item.owed ? <span>{item.owed}</span> : ""}                         
                            </List.Item>
                        )}
                />
            </div>    
        )
    }
}

export default Dashboard;