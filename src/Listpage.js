import React from "react";
import { render } from "react-dom";
let recordList = ["資料一", "資料二", "資料三"];

class List extends React.Component {
    constructor(props){
        super(props);
    }
    delItem(e){
        e.preventDefault();
        let item = e.currentTarget.parentNode.firstChild.innerHTML;
        let result = recordList.filter(word => word !== item);
        recordList = result;
        this.props.del();
    }
    render() {
        return <div className="recod_item">
            <p>{this.props.recordTxt}</p><button className="btnType2" onClick={this.delItem.bind(this)}>刪除</button>
        </div>;
    }
}

class Listpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            record: "",
            list: recordList
        };
    }
    changePage(e) {
        e.preventDefault();
        this.props.click();
    }
    txtChange(e){
        this.setState({ record: e.currentTarget.value });
        
    }
    addList(e){
        e.preventDefault();
        if (this.state.record == ""){
            alert("請輸入紀錄");
        }else{
            recordList.push(this.state.record);
            this.setState({ list: recordList });
            this.setState({ record: "" });
        }
        
    }
    delRecord(e){
        //重新指定recordList為list
        this.setState({ list: recordList });
    }
    render() {
        let listHtml=[];
        for (let i = 0; i < this.state.list.length; i++) {
            let item = <List key={i.toString()} recordTxt={this.state.list[i]} del={this.delRecord.bind(this)}/>;
            listHtml.push(item);
        }
        return <div>
            <div className="input_wrap">
                <input type="text" value={this.state.record} onChange={this.txtChange.bind(this)} />
                <button className="btnType2" onClick={this.addList.bind(this)}>新增紀錄</button>
            </div>
            <div className="cnt">
                {/* 回首頁 */}
                <div className="recod_wrap">{listHtml}</div>
                <button className="btnType2" onClick={this.changePage.bind(this)}>返回首頁</button>
            </div>
        </div>;
    }
}

export default Listpage;