class FetchDatas {
    fetchDatas(self) {
        // 获取数据
        self.$axios.get('/article')
            .then(response => {
                alert(JSON.stringify(response));
                self.article = response.data.msg
            }).catch(error => {
                console.log(error);
            }
        );
    }
}

export default new FetchDatas()