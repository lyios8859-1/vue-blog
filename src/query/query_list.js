class FetchDatas {
    fetchDatas(self, pageNo) {
        // 获取数据
        //console.log("pageNo="+pageNo);
        
        return self.$axios.get(`/api/querylist?pageNo=${pageNo}&pageSize=5`);
    }
    searchDatas(self, content) {
        // 获取数据
       return self.$axios.get('/api/searchlist');
    }
}

export default new FetchDatas()