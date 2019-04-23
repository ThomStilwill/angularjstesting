
describe('GOT service', function() {
	var service = {};
	var $httpBackend;

	beforeEach(module('omdb'));

	beforeEach(inject(function(_GOTService_,_$httpBackend_) {
		service = _GOTService_;
		$httpBackend = _$httpBackend_;
	}));

	it('should return all data', function() {
		var response;
		$httpBackend.when('GET',service.baseurl)
			.respond(200,{ data: 'fake'});

		service.search('')
			.then(function(result){
				response=result.data;
				console.log(dump(response));
			})

		$httpBackend.flush();
		expect(response.data).toEqual('fake');
	})
});
