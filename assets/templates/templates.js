(function(dust){dust.register("calendar_basic_form_part",body_0);function body_0(chk,ctx){return chk.x(ctx.get(["calendar"], false),ctx,{"block":body_1},{}).w("<input type=\"hidden\" name=\"is_shared\"value=\"").x(ctx.get(["is_shared"], false),ctx,{"else":body_2,"block":body_3},{}).w("\" /><input type=\"hidden\" name=\"is_owned\"value=\"").x(ctx.get(["is_owned"], false),ctx,{"else":body_4,"block":body_5},{}).w("\" />").p("form_element_start",ctx,ctx,{"for":"displayname","label":"displayname"}).w("<input required autofocus name=\"displayname\" type=\"text\" size=\"25\" maxlength=\"255\" value=\"").x(ctx.get(["displayname"], false),ctx,{"block":body_6},{}).w("\" class=\"displayname form-control\" />").p("form_element_end",ctx,ctx,{}).p("form_element_start",ctx,ctx,{"for":"color","label":"color"}).w("<input name=\"calendar_color\"value=\"").x(ctx.get(["color"], false),ctx,{"else":body_7,"block":body_8},{}).w("\" class=\"calendar_color pick_color form-control\" maxlength=\"7\" size=\"7\" />").p("form_element_end",ctx,ctx,{}).x(ctx.get(["public_url"], false),ctx,{"block":body_9},{});}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("<input type=\"hidden\" name=\"calendar\" value=\"").f(ctx.get(["calendar"], false),ctx,"h").w("\" />");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.w("false");}body_2.__dustBody=!0;function body_3(chk,ctx){return chk.w("true");}body_3.__dustBody=!0;function body_4(chk,ctx){return chk.w("false");}body_4.__dustBody=!0;function body_5(chk,ctx){return chk.w("true");}body_5.__dustBody=!0;function body_6(chk,ctx){return chk.f(ctx.get(["displayname"], false),ctx,"h");}body_6.__dustBody=!0;function body_7(chk,ctx){return chk.f(ctx.get(["default_calendar_color"], false),ctx,"h");}body_7.__dustBody=!0;function body_8(chk,ctx){return chk.f(ctx.get(["color"], false),ctx,"h");}body_8.__dustBody=!0;function body_9(chk,ctx){return chk.w("<div class=\"public_url_container\"><i class=\"fa fa-lg fa-link\"></i> <a href=\"").f(ctx.get(["public_url"], false),ctx,"h").w("\">").h("i18n",ctx,{},{"type":"labels","name":"publicurl"},"h").w("</p></a></div>");}body_9.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("calendar_create_dialog",body_0);function body_0(chk,ctx){return chk.w("<div id=\"calendar_create_dialog\">").p("form_open",ctx,ctx,{"applyclass":"form-horizontal","applyid":"calendar_create_form"}).p("calendar_basic_form_part",ctx,ctx,{}).p("form_close",ctx,ctx,{}).w("</div>");}body_0.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("calendar_delete_dialog",body_0);function body_0(chk,ctx){return chk.w("<div id=\"calendar_delete_dialog\">").p("form_open",ctx,ctx,{}).w("<input type=\"hidden\" name=\"calendar\" value=\"").f(ctx.get(["calendar"], false),ctx,"h").w("\" /><p>").h("i18n",ctx,{},{"type":"messages","name":"info_confirmcaldelete"},"h").w("</p><p><div class=\"calendar_color\" style=\"background-color: ").f(ctx.get(["color"], false),ctx,"h").w(";\"></div> ").f(ctx.get(["displayname"], false),ctx,"h").w("</p><p>").h("i18n",ctx,{},{"type":"messages","name":"info_permanentremoval"},"h").w("</p>").p("form_close",ctx,ctx,{}).w("</div>");}body_0.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("calendar_list_entry",body_0);function body_0(chk,ctx){return chk.w("<li data-calendar-url=\"").f(ctx.get(["url"], false),ctx,"h").w("\" class=\"available_calendar").x(ctx.get(["default_calendar"], false),ctx,{"block":body_1},{}).w("\"><i class=\"calendar_color fa fa-lg fa-square fa-li\" style=\"color: ").x(ctx.get(["color"], false),ctx,{"else":body_2,"block":body_3},{}).w("\"></i><span class=\"icons\">").x(ctx.get(["is_shared"], false),ctx,{"block":body_4},{}).x(ctx.get(["is_owned"], false),ctx,{"block":body_6},{}).w("</span><span class=\"text\"").nx(ctx.get(["is_owned"], false),ctx,{"block":body_8},{}).w(">").f(ctx.get(["displayname"], false),ctx,"h").w("</span><i title=\"").h("i18n",ctx,{},{"type":"labels","name":"modifycalendar"},"h").w("\" class=\"cfg pseudobutton fa fa-cogs\"></i></li>");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w(" default_calendar");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.f(ctx.get(["default_calendar_color"], false),ctx,"h");}body_2.__dustBody=!0;function body_3(chk,ctx){return chk.f(ctx.get(["color"], false),ctx,"h");}body_3.__dustBody=!0;function body_4(chk,ctx){return chk.nx(ctx.get(["writable"], false),ctx,{"block":body_5},{});}body_4.__dustBody=!0;function body_5(chk,ctx){return chk.w("<i title=\"").h("i18n",ctx,{},{"type":"labels","name":"readonly"},"h").w("\" class=\"fa fa-lock\"></i>");}body_5.__dustBody=!0;function body_6(chk,ctx){return chk.h("gt",ctx,{"block":body_7},{"key":ctx.getPath(false, ["shares","length"]),"value":0},"h");}body_6.__dustBody=!0;function body_7(chk,ctx){return chk.w("<i title=\"").h("i18n",ctx,{},{"type":"labels","name":"currentlysharing"},"h").w("\" class=\"fa fa-share\"></i>");}body_7.__dustBody=!0;function body_8(chk,ctx){return chk.w("title=\"").h("i18n",ctx,{},{"type":"messages","name":"info_sharedby","user":body_9},"h").w("\"");}body_8.__dustBody=!0;function body_9(chk,ctx){return chk.f(ctx.get(["owner"], false),ctx,"h");}body_9.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("calendar_modify_dialog",body_0);function body_0(chk,ctx){return chk.w("<div id=\"calendar_modify_dialog\">").p("form_open",ctx,ctx,{"applyclass":"form-horizontal","applyid":"calendar_modify_form"}).w("<ul class=\"nav nav-tabs\" role=\"tablist\"><li role=\"presentation\" class=\"active\"><a role=\"tab\" href=\"#tabs-general\" data-toggle=\"tab\"><i class=\"tab-icon fa fa-tag\"></i>").h("i18n",ctx,{},{"type":"labels","name":"generaloptions"},"h").w("</a></li>").x(ctx.get(["enable_calendar_sharing"], false),ctx,{"block":body_1},{}).w("</ul><div class=\"tab-content\"><div role=\"tabpanel\" id=\"tabs-general\" class=\"tab-pane active\">").nx(ctx.get(["is_owned"], false),ctx,{"block":body_3},{}).p("calendar_basic_form_part",ctx,ctx,{}).w("</div>").x(ctx.get(["enable_calendar_sharing"], false),ctx,{"block":body_7},{}).w("</div><!-- tab-content -->").p("form_close",ctx,ctx,{}).w("</div>");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.nx(ctx.get(["is_shared"], false),ctx,{"block":body_2},{});}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.w("<li role=\"presentation\"><a role=\"tab\" href=\"#tabs-share\" data-toggle=\"tab\"><i class=\"tab-icon fa fa-group\"></i>").h("i18n",ctx,{},{"type":"labels","name":"shareoptions"},"h").w("</a></li>");}body_2.__dustBody=!0;function body_3(chk,ctx){return chk.w("<div class=\"share_info ui-corner-all\">").h("i18n",ctx,{},{"type":"messages","name":"info_sharedby","user":body_4},"h").w(" ").h("eq",ctx,{"block":body_5},{"key":body_6,"value":"0"},"h").w("</div>");}body_3.__dustBody=!0;function body_4(chk,ctx){return chk.f(ctx.get(["owner"], false),ctx,"h");}body_4.__dustBody=!0;function body_5(chk,ctx){return chk.w("(").h("i18n",ctx,{},{"type":"labels","name":"readonly"},"h").w(")");}body_5.__dustBody=!0;function body_6(chk,ctx){return chk.f(ctx.get(["rw"], false),ctx,"h");}body_6.__dustBody=!0;function body_7(chk,ctx){return chk.nx(ctx.get(["is_shared"], false),ctx,{"block":body_8},{});}body_7.__dustBody=!0;function body_8(chk,ctx){return chk.w("<div role=\"tabpanel\" id=\"tabs-share\" class=\"tab-pane\">").p("calendar_share_table",ctx,ctx,{}).w("</div>");}body_8.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("calendar_share_access_options",body_0);function body_0(chk,ctx){return chk.w(" <option value=\"0\"").h("eq",ctx,{"block":body_1},{"key":body_2,"value":"0"},"h").w(">").h("i18n",ctx,{},{"type":"labels","name":"readonly"},"h").w("</option><option value=\"1\"").h("eq",ctx,{"block":body_3},{"key":body_4,"value":"1"},"h").w(">").h("i18n",ctx,{},{"type":"labels","name":"readandwrite"},"h").w("</option>");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w(" selected=\"true\"");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.f(ctx.get(["rw"], false),ctx,"h");}body_2.__dustBody=!0;function body_3(chk,ctx){return chk.w(" selected=\"true\"");}body_3.__dustBody=!0;function body_4(chk,ctx){return chk.f(ctx.get(["rw"], false),ctx,"h");}body_4.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("calendar_share_row",body_0);function body_0(chk,ctx){return chk.w("<div class=\"form-group row share\"").x(ctx.get(["new"], false),ctx,{"block":body_1},{}).w("><div class=\"col-md-12\"><div class=\"col-md-6\">").nx(ctx.get(["new"], false),ctx,{"block":body_2},{}).x(ctx.get(["new"], false),ctx,{"block":body_4},{}).w("</div><div class=\"col-md-4\">").nx(ctx.get(["new"], false),ctx,{"block":body_5},{}).x(ctx.get(["new"], false),ctx,{"block":body_6},{}).p("calendar_share_access_options",ctx,ctx,{}).w("</select></div><div class=\"col-md-2\"><p class=\"form-control-static\"><a href=\"javascript:void(0)\" class=\"remove\"><i class=\"fa fa-remove fa-fw\"></i></a></p></div></div></div>");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w(" id=\"calendar_share_add_row\"");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.w("<input type=\"hidden\" name=\"shares[with][]\" value=\"").f(ctx.get(["with"], false),ctx,"h").w("\" /><p class=\"form-control-static\"><span class=\"username\" title=\"").f(ctx.get(["with"], false),ctx,"h").w("\">").f(ctx.get(["displayname"], false),ctx,"h").w("</span>").x(ctx.get(["email"], false),ctx,{"block":body_3},{}).w("</p>");}body_2.__dustBody=!0;function body_3(chk,ctx){return chk.w("<em> &lt;").f(ctx.get(["email"], false),ctx,"h").w("&gt;</em>");}body_3.__dustBody=!0;function body_4(chk,ctx){return chk.w("<input name=\"filter\" class=\"form-control\" id=\"calendar_share_filter\" value=\"\" maxlength=\"255\" size=\"10\" />");}body_4.__dustBody=!0;function body_5(chk,ctx){return chk.w("<select name=\"shares[rw][]\" class=\"form-control\">");}body_5.__dustBody=!0;function body_6(chk,ctx){return chk.w("<select name=\"new_rw\" class=\"form-control\" id=\"calendar_share_add_rw\">");}body_6.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("calendar_share_table",body_0);function body_0(chk,ctx){return chk.w("<p id=\"no_shares\" class=\"text-center\">").h("i18n",ctx,{},{"type":"messages","name":"info_notshared"},"h").w("</p><div id=\"shares\">").s(ctx.get(["shares"], false),ctx,{"block":body_1},{}).w("</div><div class=\"text-right\"><a href=\"javascript:void(0)\" id=\"new_share\"><i class=\"fa fa-plus\"></i> ").h("i18n",ctx,{},{"type":"labels","name":"add_share"},"h").w("</a></div>");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.p("calendar_share_row",ctx,ctx,{});}body_1.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("datepicker_button",body_0);function body_0(chk,ctx){return chk.w("<i class=\"btn fa fa-calendar\" title=\"").h("i18n",ctx,{},{"type":"labels","name":"choose_date"},"h").w("\"></i><input type=\"text\" style=\"width: 0;height: 0;border:0;\" id=\"datepicker_fullcalendar\" />");}body_0.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("event_basic_form_part",body_0);function body_0(chk,ctx){return chk.x(ctx.get(["uid"], false),ctx,{"block":body_1},{}).p("form_element_start",ctx,ctx,{"for":"summary","label":"summary"}).w("<input required name=\"summary\" type=\"text\" size=\"25\" maxlength=\"255\" value=\"").f(ctx.get(["title"], false),ctx,"h").w("\" class=\"summary form-control\" />").p("form_element_end",ctx,ctx,{}).p("form_element_start",ctx,ctx,{"for":"location","label":"location"}).w("<input name=\"location\" type=\"text\" size=\"25\" maxlength=\"255\" value=\"").f(ctx.get(["location"], false),ctx,"h").w("\" class=\"location form-control\" />").p("form_element_end",ctx,ctx,{}).p("form_element_start",ctx,ctx,{"for":"calendar","label":"calendar"}).w("<select name=\"calendar\" class=\"form-control\"").x(ctx.get(["fixed_calendar"], false),ctx,{"block":body_4},{}).w(">").s(ctx.get(["calendars"], false),ctx,{"block":body_5},{"current_calendar":ctx.get(["calendar"], false)}).w("</select>").p("form_element_end",ctx,ctx,{}).p("form_element_start",ctx,ctx,{"for":"color","label":"color"}).w("<input name=\"color\" type=\"text\" size=\"7\" maxlength=\"7\" value=\"").f(ctx.get(["color"], false),ctx,"h").w("\" class=\"color form-control pick_color\" />").p("form_element_end",ctx,ctx,{}).w("<div class=\"generate-iso8601\" data-only-date-if-checked=\"input.allday\"><input class=\"generated\" type=\"hidden\" name=\"start\" id=\"start\" />").p("form_element_start",ctx,ctx,{"for":"start_date","label":"startdate"}).w("<div class=\"row\"><div class=\"col-sm-4\"><input required name=\"start_date\" type=\"text\" size=\"15\" maxlength=\"10\" value=\"").f(ctx.get(["start_date"], false),ctx,"h").w("\"class=\"start_date date form-control\" /></div><div class=\"col-sm-3\"><input required name=\"start_time\" type=\"text\" size=\"15\" maxlength=\"10\" value=\"").f(ctx.get(["start_time"], false),ctx,"h").w("\" class=\"start_time time form-control\" /></div></div>").p("form_element_end",ctx,ctx,{}).w("</div><div class=\"generate-iso8601\" data-only-date-if-checked=\"input.allday\"><input class=\"generated\" type=\"hidden\" name=\"end\" id=\"end\">").p("form_element_start",ctx,ctx,{"for":"end_date","label":"enddate"}).w("<div class=\"row\"><div class=\"col-sm-4\"><input required name=\"end_date\" type=\"text\" size=\"15\" maxlength=\"10\" value=\"").f(ctx.get(["end_date"], false),ctx,"h").w("\" class=\"end_date date form-control\" /></div><div class=\"col-sm-3\"><input required name=\"end_time\" type=\"text\" size=\"15\" maxlength=\"10\" value=\"").f(ctx.get(["end_time"], false),ctx,"h").w("\" class=\"time end_time time form-control\" /></div></div>").p("form_element_end",ctx,ctx,{}).w("</div>").p("form_element_start",ctx,ctx,{"for":"allday","label":"alldayform"}).w("<div class=\"checkbox\"><label><input type=\"checkbox\" name=\"allday\" class=\"allday\" value=\"true\" ").x(ctx.get(["allDay"], false),ctx,{"block":body_9},{}).w(" /></label></div>").p("form_element_end",ctx,ctx,{}).p("form_element_start",ctx,ctx,{"for":"description","label":"description"}).w("<textarea name=\"description\" class=\"form-control\" rows=\"4\">").f(ctx.get(["description"], false),ctx,"h").w("</textarea>").p("form_element_end",ctx,ctx,{});}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("<input type=\"hidden\" name=\"modification\" value=\"true\" /><input type=\"hidden\" name=\"uid\" value=\"").f(ctx.get(["uid"], false),ctx,"h").w("\" /><input type=\"hidden\" name=\"href\" value=\"").f(ctx.get(["href"], false),ctx,"h").w("\" /><input type=\"hidden\" name=\"etag\" value=\"").f(ctx.get(["etag"], false),ctx,"h").w("\" /><input type=\"hidden\" name=\"original_calendar\" value=\"").f(ctx.get(["calendar"], false),ctx,"h").w("\" />").x(ctx.get(["recurrence_id"], false),ctx,{"block":body_2},{}).x(ctx.get(["fixed_calendar"], false),ctx,{"block":body_3},{});}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.w("<input type=\"hidden\" name=\"recurrence_id\" value=\"").f(ctx.get(["recurrence_id"], false),ctx,"h").w("\" />");}body_2.__dustBody=!0;function body_3(chk,ctx){return chk.w("<input type=\"hidden\" name=\"calendar\" value=\"").f(ctx.get(["calendar"], false),ctx,"h").w("\" />");}body_3.__dustBody=!0;function body_4(chk,ctx){return chk.w(" disabled=\"disabled\"");}body_4.__dustBody=!0;function body_5(chk,ctx){return chk.w("<option value=\"").f(ctx.get(["url"], false),ctx,"h").w("\"").h("eq",ctx,{"block":body_6},{"key":body_7,"value":body_8},"h").w(">").f(ctx.get(["displayname"], false),ctx,"h").w("</option>");}body_5.__dustBody=!0;function body_6(chk,ctx){return chk.w(" selected=\"selected\"");}body_6.__dustBody=!0;function body_7(chk,ctx){return chk.f(ctx.get(["calendar"], false),ctx,"h");}body_7.__dustBody=!0;function body_8(chk,ctx){return chk.f(ctx.get(["current_calendar"], false),ctx,"h");}body_8.__dustBody=!0;function body_9(chk,ctx){return chk.w("checked=\"checked\"");}body_9.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("event_delete_recurrent_dialog",body_0);function body_0(chk,ctx){return chk.w("<div id=\"event_delete_dialog\">").x(ctx.get(["first_instance"], false),ctx,{"else":body_1,"block":body_2},{}).w("</div>");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("<p>").h("i18n",ctx,{},{"type":"messages","name":"info_delete_recurrent_event"},"h").w("</p>");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.w("<p>").h("i18n",ctx,{},{"type":"messages","name":"info_delete_recurrent_event_first_instance"},"h").w("</p>");}body_2.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("event_details_popup",body_0);function body_0(chk,ctx){return chk.w("<p class=\"start_and_finish\">").f(ctx.get(["readable_dates"], false),ctx,"h").w("</p><dl class=\"dl-horizontal\"><dt>").h("i18n",ctx,{},{"type":"labels","name":"calendar"},"h").w("</dt><dd><i class=\"calendar_color fa fa-lg fa-square\" style=\"color: ").f(ctx.getPath(false, ["caldata","color"]),ctx,"h").w("\"></i>").f(ctx.getPath(false, ["caldata","displayname"]),ctx,"h").w("</dd>").x(ctx.get(["location"], false),ctx,{"block":body_1},{}).x(ctx.get(["description"], false),ctx,{"block":body_2},{}).x(ctx.get(["rrule"], false),ctx,{"block":body_3},{}).s(ctx.get(["reminders"], false),ctx,{"block":body_4},{}).w("</dl>").nx(ctx.get(["disable_actions"], false),ctx,{"block":body_5},{});}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("<dt>").h("i18n",ctx,{},{"type":"labels","name":"location"},"h").w("</dt><dd>").f(ctx.get(["location"], false),ctx,"h").w("</dd>");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.w("<dt>").h("i18n",ctx,{},{"type":"labels","name":"description"},"h").w("</dt><dd>").f(ctx.get(["description"], false),ctx,"h").w("</dd>");}body_2.__dustBody=!0;function body_3(chk,ctx){return chk.w("<dt>").h("i18n",ctx,{},{"type":"labels","name":"repeat"},"h").w("</dt><dd>").f(ctx.get(["rrule_explained"], false),ctx,"h").w("</dd>");}body_3.__dustBody=!0;function body_4(chk,ctx){return chk.w("<dt>").h("i18n",ctx,{},{"type":"labels","name":"reminder"},"h").w("</dt><dd>").p("reminder_description",ctx,ctx,{}).w("</dd>");}body_4.__dustBody=!0;function body_5(chk,ctx){return chk.w("<div class=\"actions\"><span class=\"right\"><a href=\"javascript:void(0)\" data-event-id=\"").f(ctx.get(["id"], false),ctx,"h").w("\" class=\"modify\">").h("i18n",ctx,{},{"type":"labels","name":"modify"},"h").w("</a></span><span class=\"left\"><a href=\"javascript:void(0)\" data-event-id=\"").f(ctx.get(["id"], false),ctx,"h").w("\" class=\"remove\">").h("i18n",ctx,{},{"type":"labels","name":"delete"},"h").w("</a></span></div>");}body_5.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("event_edit_dialog",body_0);function body_0(chk,ctx){return chk.w("<div id=\"event_edit_dialog\">").p("form_open",ctx,ctx,{"applyclass":"form-horizontal","applyid":"event_edit_form"}).w("<ul class=\"nav nav-tabs\" role=\"tablist\"><li role=\"presentation\" class=\"active\"><a role=\"tab\" href=\"#tabs-general\" data-toggle=\"tab\"><i class=\"tab-icon fa fa-tag\"></i>").h("i18n",ctx,{},{"type":"labels","name":"generaloptions"},"h").w("</a></li><li role=\"presentation\"><a role=\"tab\" href=\"#tabs-recurrence\" data-toggle=\"tab\"><i class=\"tab-icon fa fa-repeat\"></i>").h("i18n",ctx,{},{"type":"labels","name":"repeatoptions"},"h").w("</a></li><li role=\"presentation\"><a role=\"tab\" href=\"#tabs-reminders\" data-toggle=\"tab\"><i class=\"tab-icon fa fa-bell\"></i>").h("i18n",ctx,{},{"type":"labels","name":"remindersoptions"},"h").w("</a></li><li role=\"presentation\"><a role=\"tab\" href=\"#tabs-workgroup\" data-toggle=\"tab\"><i class=\"tab-icon fa fa-group\"></i>").h("i18n",ctx,{},{"type":"labels","name":"workgroupoptions"},"h").w("</a></li></ul><div class=\"tab-content\"><div role=\"tabpanel\" class=\"tab-pane active\" id=\"tabs-general\">").p("event_basic_form_part",ctx,ctx,{}).w("</div><div role=\"tabpanel\" class=\"tab-pane\" id=\"tabs-recurrence\">").p("repeat_rule_form",ctx,ctx,{}).w("</div><div role=\"tabpanel\" class=\"tab-pane\" id=\"tabs-reminders\">").p("reminders",ctx,ctx,{}).w("</div><div role=\"tabpanel\" class=\"tab-pane\" id=\"tabs-workgroup\">").p("form_element_start",ctx,ctx,{"for":"class","label":"privacy"}).w("<select name=\"class\" type=\"text\" class=\"form-control\"><option value=\"PUBLIC\"").h("eq",ctx,{"block":body_1},{"key":body_2,"value":"PUBLIC"},"h").w(">").h("i18n",ctx,{},{"type":"labels","name":"public"},"h").w("</option><option value=\"PRIVATE\"").h("eq",ctx,{"block":body_3},{"key":body_4,"value":"PRIVATE"},"h").w(">").h("i18n",ctx,{},{"type":"labels","name":"private"},"h").w("</option><option value=\"CONFIDENTIAL\"").h("eq",ctx,{"block":body_5},{"key":body_6,"value":"CONFIDENTIAL"},"h").w(">").h("i18n",ctx,{},{"type":"labels","name":"confidential"},"h").w("</option></select>").p("form_element_end",ctx,ctx,{}).p("form_element_start",ctx,ctx,{"for":"transp","label":"transp"}).w("<select name=\"transp\" type=\"text\" class=\"form-control\"><option value=\"OPAQUE\"").h("eq",ctx,{"block":body_7},{"key":body_8,"value":"OPAQUE"},"h").w(">").h("i18n",ctx,{},{"type":"labels","name":"opaque"},"h").w("</option><option value=\"TRANSPARENT\"").h("eq",ctx,{"block":body_9},{"key":body_10,"value":"TRANSPARENT"},"h").w(">").h("i18n",ctx,{},{"type":"labels","name":"transparent"},"h").w("</option></select>").p("form_element_end",ctx,ctx,{}).w("</div></div><!-- tab-content -->").p("form_close",ctx,ctx,{}).w("</div>");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w(" selected=\"selected\"");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.f(ctx.get(["icalendar_class"], false),ctx,"h");}body_2.__dustBody=!0;function body_3(chk,ctx){return chk.w(" selected=\"selected\"");}body_3.__dustBody=!0;function body_4(chk,ctx){return chk.f(ctx.get(["icalendar_class"], false),ctx,"h");}body_4.__dustBody=!0;function body_5(chk,ctx){return chk.w(" selected=\"selected\"");}body_5.__dustBody=!0;function body_6(chk,ctx){return chk.f(ctx.get(["icalendar_class"], false),ctx,"h");}body_6.__dustBody=!0;function body_7(chk,ctx){return chk.w(" selected=\"selected\"");}body_7.__dustBody=!0;function body_8(chk,ctx){return chk.f(ctx.get(["transp"], false),ctx,"h");}body_8.__dustBody=!0;function body_9(chk,ctx){return chk.w(" selected=\"selected\"");}body_9.__dustBody=!0;function body_10(chk,ctx){return chk.f(ctx.get(["transp"], false),ctx,"h");}body_10.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("event_edit_recurrent_dialog",body_0);function body_0(chk,ctx){return chk.w("<div id=\"event_edit_recurrent_dialog\"><p>").h("i18n",ctx,{},{"type":"messages","name":"info_edit_recurrent_event"},"h").w("</p>").x(ctx.get(["has_exceptions"], false),ctx,{"block":body_1},{}).w("</div>");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("<p>").h("i18n",ctx,{},{"type":"messages","name":"info_base_event_with_exceptions_modification"},"h").w("</p>");}body_1.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("form_close",body_0);function body_0(chk,ctx){return chk.w("</form>");}body_0.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("form_element_end",body_0);function body_0(chk,ctx){return chk.x(ctx.get(["input_help"], false),ctx,{"block":body_1},{}).w("</div></div>");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("<p class=\"help-block\">").f(ctx.get(["input_help"], false),ctx,"h").w("</p>");}body_1.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("form_element_start",body_0);function body_0(chk,ctx){return chk.w("<div class=\"form-group ").f(ctx.get(["class"], false),ctx,"h").w("\"><label ").x(ctx.get(["for"], false),ctx,{"block":body_1},{}).w("class=\"col-sm-3 control-label\">").h("i18n",ctx,{},{"type":"labels","name":ctx.get(["label"], false)},"h").w("</label><div class=\"col-sm-9\">");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("for=\"").f(ctx.get(["for"], false),ctx,"h").w("\"");}body_1.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("form_open",body_0);function body_0(chk,ctx){return chk.w("<form action=\"").f(ctx.getPath(false, ["frm","action"]),ctx,"h").w("\" method=\"").f(ctx.getPath(false, ["frm","method"]),ctx,"h").w("\"").x(ctx.get(["applyclass"], false),ctx,{"block":body_1},{}).x(ctx.get(["applyid"], false),ctx,{"block":body_2},{}).w(" accept-charset=\"utf-8\"><input type=\"hidden\" name=\"").f(ctx.get(["csrf_token_name"], false),ctx,"h").w("\" value=\"").f(ctx.get(["csrf_token_value"], false),ctx,"h").w("\">");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("class=\"").f(ctx.get(["applyclass"], false),ctx,"h").w("\"");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.w(" id=\"").f(ctx.get(["applyid"], false),ctx,"h").w("\"");}body_2.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("reminder_description",body_0);function body_0(chk,ctx){return chk.f(ctx.get(["count"], false),ctx,"h").w(" ").h("select",ctx,{"block":body_1},{"key":body_7},"h").w(" ").h("i18n",ctx,{},{"type":"labels","name":"before_start"},"h");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.h("eq",ctx,{"block":body_2},{"value":"minutes"},"h").h("eq",ctx,{"block":body_3},{"value":"hours"},"h").h("eq",ctx,{"block":body_4},{"value":"days"},"h").h("eq",ctx,{"block":body_5},{"value":"weeks"},"h").h("eq",ctx,{"block":body_6},{"value":"months"},"h");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.h("i18n",ctx,{},{"type":"labels","name":"minutes"},"h");}body_2.__dustBody=!0;function body_3(chk,ctx){return chk.h("i18n",ctx,{},{"type":"labels","name":"hours"},"h");}body_3.__dustBody=!0;function body_4(chk,ctx){return chk.h("i18n",ctx,{},{"type":"labels","name":"days"},"h");}body_4.__dustBody=!0;function body_5(chk,ctx){return chk.h("i18n",ctx,{},{"type":"labels","name":"weeks"},"h");}body_5.__dustBody=!0;function body_6(chk,ctx){return chk.h("i18n",ctx,{},{"type":"labels","name":"months"},"h");}body_6.__dustBody=!0;function body_7(chk,ctx){return chk.f(ctx.get(["unit"], false),ctx,"h");}body_7.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("reminder_row",body_0);function body_0(chk,ctx){return chk.w("<div class=\"form-group row reminder\"><div class=\"col-md-12\"><div class=\"col-md-2\"><input class=\"form-control\" type=\"text\" name=\"reminders[count][]\" value=\"").x(ctx.get(["count"], false),ctx,{"else":body_1,"block":body_2},{}).w("\"/></div><div class=\"col-md-4\"><select class=\"form-control\" name=\"reminders[unit][]\"><option value=\"minutes\"").h("eq",ctx,{"block":body_3},{"key":body_4,"value":"minutes"},"h").w(">").h("i18n",ctx,{},{"type":"labels","name":"minutes"},"h").w("</option><option value=\"hours\"").h("eq",ctx,{"block":body_5},{"key":body_6,"value":"hours"},"h").w(">").h("i18n",ctx,{},{"type":"labels","name":"hours"},"h").w("</option><option value=\"days\"").h("eq",ctx,{"block":body_7},{"key":body_8,"value":"days"},"h").w(">").h("i18n",ctx,{},{"type":"labels","name":"days"},"h").w("</option><option value=\"weeks\"").h("eq",ctx,{"block":body_9},{"key":body_10,"value":"weeks"},"h").w(">").h("i18n",ctx,{},{"type":"labels","name":"weeks"},"h").w("</option><option value=\"months\"").h("eq",ctx,{"block":body_11},{"key":body_12,"value":"months"},"h").w(">").h("i18n",ctx,{},{"type":"labels","name":"months"},"h").w("</option></select></div><div class=\"col-md-4\"><p class=\"form-control-static\">").h("i18n",ctx,{},{"type":"labels","name":"before_start"},"h").w("</p></div><div class=\"col-md-2\"><p class=\"form-control-static\"><a href=\"javascript:void(0)\" class=\"remove\"><i class=\"fa fa-remove fa-fw\"></i></a></p></div></div></div>");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("0");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.f(ctx.get(["count"], false),ctx,"h");}body_2.__dustBody=!0;function body_3(chk,ctx){return chk.w(" selected=\"selected\"");}body_3.__dustBody=!0;function body_4(chk,ctx){return chk.f(ctx.get(["unit"], false),ctx,"h");}body_4.__dustBody=!0;function body_5(chk,ctx){return chk.w(" selected=\"selected\"");}body_5.__dustBody=!0;function body_6(chk,ctx){return chk.f(ctx.get(["unit"], false),ctx,"h");}body_6.__dustBody=!0;function body_7(chk,ctx){return chk.w(" selected=\"selected\"");}body_7.__dustBody=!0;function body_8(chk,ctx){return chk.f(ctx.get(["unit"], false),ctx,"h");}body_8.__dustBody=!0;function body_9(chk,ctx){return chk.w(" selected=\"selected\"");}body_9.__dustBody=!0;function body_10(chk,ctx){return chk.f(ctx.get(["unit"], false),ctx,"h");}body_10.__dustBody=!0;function body_11(chk,ctx){return chk.w(" selected=\"selected\"");}body_11.__dustBody=!0;function body_12(chk,ctx){return chk.f(ctx.get(["unit"], false),ctx,"h");}body_12.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("reminders",body_0);function body_0(chk,ctx){return chk.w("<p class=\"text-center\" id=\"no_reminders\">").h("i18n",ctx,{},{"type":"messages","name":"info_noreminders"},"h").w("</p><div class=\"text-center\" id=\"reminders\">").s(ctx.get(["reminders"], false),ctx,{"block":body_1},{}).w("</div><div class=\"text-right\"><a href=\"javascript:void(0)\" id=\"new_reminder\"><i class=\"fa fa-plus\"></i> ").h("i18n",ctx,{},{"type":"labels","name":"add_reminder"},"h").w("</a></div><hr><p><small class=\"alert\">").h("i18n",ctx,{},{"type":"messages","name":"info_reminders_agendav_support"},"h").w("</small></p>");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.p("reminder_row",ctx,ctx,{});}body_1.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("repeat_rule_form",body_0);function body_0(chk,ctx){return chk.w("<p id=\"repeat_warning_rrule_unreproducible\" class=\"text-warning\">").h("i18n",ctx,{},{"type":"messages","name":"info_rrule_not_reproducible"},"h").w("</p>").x(ctx.get(["fixed_repeat_rule"], false),ctx,{"block":body_1},{}).w("<input type=\"hidden\" name=\"fixed_repeat_rule\" id=\"fixed_repeat_rule\" value=\"").f(ctx.get(["fixed_repeat_rule"], false),ctx,"h").w("\"><input type=\"hidden\" name=\"rrule\" id=\"rrule\" value=\"").f(ctx.get(["rrule"], false),ctx,"h").w("\"><input type=\"hidden\" name=\"rrule_original\" id=\"rrule_original\" value=\"").f(ctx.get(["rrule"], false),ctx,"h").w("\">").nx(ctx.get(["fixed_repeat_rule"], false),ctx,{"block":body_2},{});}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("<p id=\"repeat_warning_rrule_fixed\" class=\"text-warning\">").h("i18n",ctx,{},{"type":"messages","name":"info_rrule_protected"},"h").w("</p>").p("form_element_start",ctx,ctx,{"for":"","label":"repeat_explanation"}).w("<p class=\"form-control-static\" id=\"fixed_repeat_rule_explanation\"></p>").p("form_element_end",ctx,ctx,{});}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.p("form_element_start",ctx,ctx,{"for":"frequency","label":"repeat"}).w("<select name=\"repeat_frequency\" class=\"form-control\" id=\"repeat_frequency\"><option value=\"-1\">").h("i18n",ctx,{},{"type":"labels","name":"repeatno"},"h").w("</option><option value=\"").f(ctx.get(["daily"], false),ctx,"h").w("\">").h("i18n",ctx,{},{"type":"labels","name":"repeatdaily"},"h").w("</option><option value=\"").f(ctx.get(["weekly"], false),ctx,"h").w("\">").h("i18n",ctx,{},{"type":"labels","name":"repeatweekly"},"h").w("</option><option value=\"").f(ctx.get(["monthly"], false),ctx,"h").w("\">").h("i18n",ctx,{},{"type":"labels","name":"repeatmonthly"},"h").w("</option><option value=\"").f(ctx.get(["yearly"], false),ctx,"h").w("\">").h("i18n",ctx,{},{"type":"labels","name":"repeatyearly"},"h").w("</option></select>").p("form_element_end",ctx,ctx,{}).w("<div class=\"container_repeat_options\">").p("form_element_start",ctx,ctx,{"for":"interval","label":"every"}).w("<div class=\"col-md-3\"><select name=\"repeat_interval\" class=\"secondary form-control\" id =\"repeat_interval\">").s(ctx.get(["numbers1to31"], false),ctx,{"block":body_3},{}).w("</select></div>").p("form_element_end",ctx,ctx,{}).p("form_element_start",ctx,ctx,{"for":"byday","label":"repeat_by_day","class":"container_repeat_by_day"}).w("<label class=\"checkbox-inline\"><input class=\"secondary\" type=\"checkbox\" name=\"repeat_by_day\" value=\"sunday\"> ").h("i18n",ctx,{},{"type":"labels","name":"sunday_short"},"h").w("</label><label class=\"checkbox-inline\"><input class=\"secondary\" type=\"checkbox\" name=\"repeat_by_day\" value=\"monday\"> ").h("i18n",ctx,{},{"type":"labels","name":"monday_short"},"h").w("</label><label class=\"checkbox-inline\"><input class=\"secondary\" type=\"checkbox\" name=\"repeat_by_day\" value=\"tuesday\"> ").h("i18n",ctx,{},{"type":"labels","name":"tuesday_short"},"h").w("</label><label class=\"checkbox-inline\"><input class=\"secondary\" type=\"checkbox\" name=\"repeat_by_day\" value=\"wednesday\"> ").h("i18n",ctx,{},{"type":"labels","name":"wednesday_short"},"h").w("</label><label class=\"checkbox-inline\"><input class=\"secondary\" type=\"checkbox\" name=\"repeat_by_day\" value=\"thursday\"> ").h("i18n",ctx,{},{"type":"labels","name":"thursday_short"},"h").w("</label><label class=\"checkbox-inline\"><input class=\"secondary\" type=\"checkbox\" name=\"repeat_by_day\" value=\"friday\"> ").h("i18n",ctx,{},{"type":"labels","name":"friday_short"},"h").w("</label><label class=\"checkbox-inline\"><input class=\"secondary\" type=\"checkbox\" name=\"repeat_by_day\" value=\"saturday\"> ").h("i18n",ctx,{},{"type":"labels","name":"saturday_short"},"h").w("</label>").p("form_element_end",ctx,ctx,{}).p("form_element_start",ctx,ctx,{"for":"repeat_by_month_day","label":"repeat_by_month_day","class":"container_repeat_by_month_day"}).w("<div class=\"col-md-3\"><select name=\"repeat_by_month_day\" class=\"secondary form-control\" id=\"repeat_by_month_day\"><option value=\"\">-</option>").s(ctx.get(["numbers1to31"], false),ctx,{"block":body_4},{}).w("</select></div>").p("form_element_end",ctx,ctx,{}).p("form_element_start",ctx,ctx,{"for":"","label":"ends","class":"container_repeat_ends"}).w("<div class=\"row\"><div class=\"col-md-5\"><select name=\"repeat_ends\" class=\"form-control\" id=\"repeat_ends\"><option value=\"never\">").h("i18n",ctx,{},{"type":"labels","name":"never"},"h").w("</option><option value=\"after\">").h("i18n",ctx,{},{"type":"labels","name":"after"},"h").w("</option><option value=\"date\">").h("i18n",ctx,{},{"type":"labels","name":"choose_date"},"h").w("</option></select></div><div class=\"col-md-5 container_repeat_ends_options\"><div class=\"container_repeat_count\"><div class=\"col-md-6\"><select name=\"repeat_count\" class=\"secondary form-control\" id=\"repeat_count\">").s(ctx.get(["numbers1to31"], false),ctx,{"block":body_5},{}).w("</select></div><div class=\"col-md-6\"><p class=\"form-control-static\">").h("i18n",ctx,{},{"type":"labels","name":"occurrences"},"h").w("</p></div></div><!-- container_recurence_count --><div class=\"generate-iso8601 container_repeat_until\"><input type=\"hidden\" class=\"generated\" name=\"repeat_until_date\" /><input type=\"text\" name=\"repeat_until\" class=\"date form-control\" id=\"repeat_until\" maxlength=\"10\" size=\"15\"/></div><!-- container_repeat_until --></div><!-- container_repeat_ends_options, inside container_repeat_ends --></div><!-- row, inside container_repeat_ends -->").p("form_element_end",ctx,ctx,{}).p("form_element_start",ctx,ctx,{"for":"","label":"repeat_explanation"}).w("<p class=\"form-control-static\" id=\"repeat_explanation\"></p>").p("form_element_end",ctx,ctx,{}).w("</div>");}body_2.__dustBody=!0;function body_3(chk,ctx){return chk.w("<option value=\"").f(ctx.getPath(true, []),ctx,"h").w("\">").f(ctx.getPath(true, []),ctx,"h").w("</option>");}body_3.__dustBody=!0;function body_4(chk,ctx){return chk.w("<option value=\"").f(ctx.getPath(true, []),ctx,"h").w("\">").f(ctx.getPath(true, []),ctx,"h").w("</option>");}body_4.__dustBody=!0;function body_5(chk,ctx){return chk.w("<option value=\"").f(ctx.getPath(true, []),ctx,"h").w("\">").f(ctx.getPath(true, []),ctx,"h").w("</option>");}body_5.__dustBody=!0;return body_0}(dust));
