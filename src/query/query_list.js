class FetchDatas {
    fetchDatas(self, pageNo) {
        // 获取数据
        console.log("pageNo="+pageNo);
        
        return self.$axios.get('/api/querylist?pageNo='+pageNo+'&pageSize=5');
    }
}

export default new FetchDatas()