class FetchDatas {
    fetchDatas(self) {
        // 获取数据
        return self.$axios.get('/api/querylist');
    }
}

export default new FetchDatas()