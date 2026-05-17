it("TC05_POST isteği body", ()=>{

const body = {
    name:"M.",
    role:"QA",
    age:30
}

const rq = {
    method: 'POST',
    url:"https://httpbin.org/post",
    body:body,
    failOnStatusCode:false
}

cy.request(rq).then((response)=>{

    assert.equal(response.status,200);
    expect(response.status).to.eq(200);
    cy.log("response body :::::::: ",JSON.stringify(response.body))

})

})