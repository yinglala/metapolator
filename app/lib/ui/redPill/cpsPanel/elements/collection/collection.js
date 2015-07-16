define([
    'angular'
  , './collection-controller'
  , './collection-directive'
  , './collection-drop-directive'
  , 'metapolator/ui/redPill/cpsPanel/elements/rule/rule'
  , 'metapolator/ui/redPill/cpsPanel/elements/namespaceCollection/namespaceCollection'
  , 'metapolator/ui/redPill/cpsPanel/elements/comment/comment'
  , 'metapolator/ui/redPill/cpsPanel/elements/generic/generic'
  , 'metapolator/ui/redPill/cpsPanel/dragAndDrop/dragAndDrop'
], function(
    angular
  , Controller
  , directive
  , collectionDropDirective
  , rule
  , namespaceCollection
  , comment
  , generic
  , dragAndDrop
) {
    "use strict";
    return angular.module('cps.collection', [rule.name, namespaceCollection.name
                           , comment.name, generic.name, dragAndDrop.name])
      .controller('CollectionController', Controller)
      .directive('mtkCpsCollection', directive)
      .directive('mtkCollectionDrop', collectionDropDirective)
      ;
});
