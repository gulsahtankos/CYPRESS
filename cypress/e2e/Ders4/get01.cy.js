describe("API testing", ()=>{

    it("TC01_GET isteği", ()=>{

        cy.request("https://httpbin.org/get").then((response)=>{

            assert.equal(response.status,200);
            expect(response.status).to.eq(200);

        })

    })

    it("TC02_GET istegi", ()=>{
    const rq = {
        method: 'GET',
        url: "https://httpbin.org/get",
        FailOnStatusCode: false,
    }

    cy.request(rq).then((response)=>{

        assert.equal(response.status,200);
        expect(response.status).to.eq(200);
        console.log("response :::::::: ", response)
        cy.log("response :::::::: ", JSON.stringify(response))
        cy.log("response body :::::::: ", JSON.stringify(response.body))
        cy.log("response headers ::::::: ", JSON.stringify(response.headers))
        cy.log("response status :::::::: ", JSON.stringify(response.status))
        cy.log("response statusText ::::: ", JSON.stringify(response.statusText))
        cy.log("response duration :::::: ", JSON.stringify(response.duration))

    })

});
    it("TC03 GET QS isteği", ()=>{

    const rq ={
        method: 'GET',
        url:"https://httpbin.org/get",
        qs:{
            id:"1",
            name:"Mr"
        },

        failOnStatusCode: false
    }

    cy.request(rq).then((response)=>{

        assert.equal(response.status,200);
        expect(response.status).to.eq(200);
        cy.log("response body :::::::: ",JSON.stringify(response.body))

    })

});

//Post isteği body gönderme::::::::1
    it("TC04_POST isteği body", ()=>{

    const rq ={
        method: 'POST',
        url:"https://httpbin.org/post",
        body:{
            name:"M.",
            role:"QA",
            age:30
        },

        failOnStatusCode: false
    }

    cy.request(rq).then((response)=>{

        assert.equal(response.status,200);
        expect(response.status).to.eq(200);
        cy.log("response body :::::::: ",JSON.stringify(response.body))

    })

})

//Post isteği body gönderme:::::::2
     it("TC05_POST isteği body", ()=>{

        const body ={
            name:"M.",
            role:"QA",
            age:30
        },
        const rq ={
        method: 'POST',
        url:"https://httpbin.org/post",
        body:body,

        failOnStatusCode:false

        }
       
    }

    cy.request(rq).then((response)=>{

        assert.equal(response.status,200);
        expect(response.status).to.eq(200);
        cy.log("response body :::::::: ",JSON.stringify(response.body))


    })


})