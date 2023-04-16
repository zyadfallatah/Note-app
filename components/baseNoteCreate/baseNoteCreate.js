let temp = `
      
<section class="create-base-note">
  <aside class="options">
    <h2 class="title">Creation Page</h2>
    <div class="features">more features will be added</div>
    <div class="confirm">
      <input id="cancel" type="button" value="Cancel">
      <input id="create" type="button" value="Create">
    </div>
  </aside>

<div class="reading-data">
  <div class="header-data">

    <div class="container">
      <h3 class="note-name">Note Name</h3>
      <div class="read-limit">
        <input type="text" id="read-note-name">
        <span id="note-name-limit">1</span>
      </div>
    </div>
    <div class="container">
      <h3 class="note-name">Sub Title</h3>
      <div class="read-limit">
        <input type="text" id="read-sub-title">
        <span id="sub-title-limit">1</span>
      </div>
    </div>

  </div>

  <div class="main-data">
    <h3 class="text-content">Text Content</h3>
    <textarea style="resize: none;" id="read-text-content"></textarea>
  </div>
</div>
</section>


`;

export default temp;
