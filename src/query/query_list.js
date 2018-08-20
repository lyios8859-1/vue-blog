class FetchDatas {
    /**
     * 分页获取数据
     * @param {object} self vue对象
     * @param {number} pageNo 当前页
     */
    fetchDatas(self, pageNo) {
        return self.$axios.get(`/api/querylist?pageNo=${pageNo}&pageSize=5`);
    }
    /**
     * 搜索数据
     * @param {object} self  vue对象
     * @param {string} content 需要搜索的内容
     */
    searchDatas(self, content) {
        return self.$axios.get('/api/searchlist', {
                params: {
                    content: content
                }
            });
    }
}

export default new FetchDatas()