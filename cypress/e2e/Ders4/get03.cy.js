 describe ("API testing", ()=>{
 it("TC03_GET istegi QS", ()=>{

    const rq ={
        method: 'GET',
        url:"https://httpbin.org/get",


        failOnStatusCode: false
    }

    cy.request(rq).then((response)=>{
        //debugger;
        assert.equal(response.status,200);
        //debugger;
        expect(response.status).to.eq(200);
        //debugger;
        assert.equal(response.body.url,"https://httpbin.org/get");
        //debugger;
        assert.equal(response.headers['content-type'],'application/json');
        assert.isTrue(response.duration <= 30000);
        expect(response.duration).to.be.most(30000);
    });

});

 });