(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:articlesCtrl
	* @description
	* # articlesCtrl
	* Controller of the app
	*/

	angular
		.module('articles')
		.controller('ArticleCtrl', Articles);

		Articles.$inject = ['$stateParams', '$scope', 'ArticlesModel'];

		function Articles($stateParams, $scope, ArticlesModel) {
			/*jshint validthis: true */
			var vm = this;

			ArticlesModel.get($stateParams, {filter: '{"include": ["images", "tweet", "youtube-video"]}'}).$promise
				.then(function(article){
					$scope.article = article;
				});

		}

})();
