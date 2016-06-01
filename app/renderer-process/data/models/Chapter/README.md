# Chapter

A chapter is simply an id associated with an array of pages in order.

```js
{
  id: 'somelongstring',
  pages: [ 'imageAddress1', 'imageAddress2', 'imageAddress3' ]
}
```

As of now, we are assuming that a chapter will remain the same after it is published, but we do have a lastUpdated property, which is set by `chapterReducer`.  This is set when we update our internal state with a chapter, so that it
