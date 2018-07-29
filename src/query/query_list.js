class FetchDatas {
    fetchDatas(self) {
        // 获取数据
        return self.$axios.get('/api/querylist?pageNo=1&pageSize=5');
    }
}

export default new FetchDatas()