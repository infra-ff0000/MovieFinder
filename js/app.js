function movieViewModel(){
	var self = this;

	self.newMovie = {
		Name: ko.observableArray(),
		Director: ko.observableArray(),
		Year: ko.observableArray()
	};

	

	ko.mapping.fromJS(data,{},self.movies);
	self.movies = ko.observableArray();

	

	
};

ko.applyBindings(new movieViewModel());