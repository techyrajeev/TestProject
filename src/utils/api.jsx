import data from './data.json';

module.exports = {

    data : data,

    getRawData() {
        return this.data;
    },

    getAllDataViaRest() {
        const res =  this.data.MedlineCitationSet.Article.map((article) => {
            const result = {};
            article.AuthorList.Author.forEach((author) => { result[`${author.ForeName} ${author.LastName}`] = 1; } );
            return result;
        }).reduce((acc, curr) => {
            Object.keys(curr).forEach((key) => {
                if (acc[key] !== undefined) {
                    const nobj = Object.assign({}, acc[key]);
                    for(let prop in curr) {
                        if(nobj[prop]) nobj[prop] += curr[prop];
                        else nobj[prop] = curr[prop];
                    }
                    acc[key] = nobj;
                } else {
                    acc[key] = curr;
                }
            });
            return acc;
        }, {});

        return { rawData : this.data, mData : res  };
    }
};
