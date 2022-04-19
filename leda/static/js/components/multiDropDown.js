/**
 *  renders the dropdown message and
 *  handles the user selection
 * @param {Array} multi_drop_down_data json array
 */
function renderMultiDropDown(drop_down_data) {
    let drop_down_options = "";
    for (let i = 0; i < drop_down_data.length; i += 1) {
        drop_down_options += `<option value="${drop_down_data[i].value}">${drop_down_data[i].label}</option>`;
    }
    const drop_down_select = `
    <div class="multiDropDownMsg">
        <label style="font-size:15px; for="multi">Choose your option(s)</label><br>
        <select id="multi" name="multi" multiple>
            ${drop_down_options}
        </select>
        <input type="button" id="submit_values" value="send"/></div>
			</div>`;
    $(".chats").append(drop_down_select);
    scrollToBottomOfResults();
    $(function(){
        $('#multi').multiSelect();
          selectAll: true
    });
    function sendValues(){
      let values = [];
      let labels = [];
      for (var option of document.getElementById("multi").options)
      {
        if (option.selected) {
            values.push(option.value);
            labels.push(option.label);
        }
      }
      setUserResponse(labels.join(", "));
      send(values.join(","));
      $(".multiDropDownMsg").remove();
    }

    document.getElementById("submit_values").addEventListener("click", sendValues)

    // add event handler if user selects a option.
    // eslint-disable-next-line func-names
}
