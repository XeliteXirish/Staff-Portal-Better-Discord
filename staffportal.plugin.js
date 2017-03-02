//META{"name":"StaffPortal"}*//

var StaffPortal = function () {};

StaffPortal.prototype.getName = function() {
    return "StaffPortal";
};
StaffPortal.prototype.getDescription = function() {
    return "Easier StaffPortal integration!";
};
StaffPortal.prototype.getVersion = function() {
    return "1.0";
};
StaffPortal.prototype.getAuthor = function() {
    return "XeliteXirish";
};
StaffPortal.prototype.start = function() {
    $(document).on("mouseover.rpr", function(e) {
        var target = $(e.target);
        if(target.parents(".message").length > 0) {
            var isCompact = false;
            var allmessages = $('.messages .message-group');
            var nameDateBlock = $('.messages .message-group .comment .message .body h2');

            var replyBtn = '<span class="staffportalreply" style="cursor:pointer;color:#fff !important;position:relative;top:-1px;margin-left:5px;text-transform:uppercase;font-size:10px;padding:3px 5px;box-sizing:border-box;background:rgba(0,0,0,0.4)">Reply</span>';
            var purgeBtn = '<span class="staffportalpurge" style="cursor:pointer;color:#fff !important;position:relative;top:-1px;margin-left:5px;text-transform:uppercase;font-size:10px;padding:3px 5px;box-sizing:border-box;background:rgba(0,0,0,0.4)">Purge</span>';
            var strikeBtn = '<span class="staffportalstrike" style="cursor:pointer;color:#fff !important;position:relative;top:-1px;margin-left:5px;text-transform:uppercase;font-size:10px;padding:3px 5px;box-sizing:border-box;background:rgba(0,0,0,0.4)">Strike</span>';
            var kickBtn = '<span class="staffportalkick" style="cursor:pointer;color:#fff !important;position:relative;top:-1px;margin-left:5px;text-transform:uppercase;font-size:10px;padding:3px 5px;box-sizing:border-box;background:rgba(0,0,0,0.4)">Kick</span>';
            var banBtn = '<span class="staffportalban" style="cursor:pointer;color:#fff !important;position:relative;top:-1px;margin-left:5px;text-transform:uppercase;font-size:10px;padding:3px 5px;box-sizing:border-box;background:rgba(0,0,0,0.4)">Ban</span>';

            var StaffPortalPrefix = '/sp '

            allmessages.on('mouseover',function() {

                if (nameDateBlock.find('.staffportalreply').length == 0) {
                    $(this).find(nameDateBlock).append(replyBtn);
                    $(this).find('.staffportalreply').click(function() {
                        $(this).parent().find('.user-name').click();
                        var popout = $(".user-popout");
                        var user = popout.find('.username').text() + popout.find('.discriminator').text();
                        $('.content .channel-textarea textarea').val('@'+user+' '+$('.content .channel-textarea textarea').val()).focus();
                        popout.remove();
                    });
                }

                if (nameDateBlock.find('.staffportalpurge').length == 0) {
                    $(this).find(nameDateBlock).append(purgeBtn);

                    $(this).find('.staffportalpurge').click(function() {
                        $(this).parent().find('.user-name').click();
                        var popout = $(".user-popout");
                        var user = popout.find('.username').text() + popout.find('.discriminator').text();
                        $('.content .channel-textarea textarea').val(StaffPortalPrefix + 'purge @'+user+' '+$('.content .channel-textarea textarea').val()).focus();
                        popout.remove();
                    });
                }

                if (nameDateBlock.find('.staffportalstrike').length == 0) {
                    $(this).find(nameDateBlock).append(strikeBtn);

                    $(this).find('.staffportalstrike').click(function() {
                        $(this).parent().find('.user-name').click();
                        var popout = $(".user-popout");
                        var user = popout.find('.username').text() + popout.find('.discriminator').text();
                        $('.content .channel-textarea textarea').val(StaffPortalPrefix + 'strike @'+user+' | '+' '+$('.content .channel-textarea textarea').val()).focus();
                        popout.remove();
                    });
                }

                if (nameDateBlock.find('.staffportalkick').length == 0) {
                    $(this).find(nameDateBlock).append(kickBtn);

                    $(this).find('.staffportalkick').click(function() {
                        $(this).parent().find('.user-name').click();
                        var popout = $(".user-popout");
                        var user = popout.find('.username').text() + popout.find('.discriminator').text();
                        $('.content .channel-textarea textarea').val(StaffPortalPrefix + 'kick @'+user+' | '+' '+$('.content .channel-textarea textarea').val()).focus();
                        popout.remove();
                    });
                }

                if (nameDateBlock.find('.staffportalban').length == 0) {
                    $(this).find(nameDateBlock).append(banBtn);

                    $(this).find('.staffportalban').click(function() {
                        $(this).parent().find('.user-name').click();
                        var popout = $(".user-popout");
                        var user = popout.find('.username').text() + popout.find('.discriminator').text();
                        $('.content .channel-textarea textarea').val(StaffPortalPrefix + 'ban @'+user+' | '+' '+$('.content .channel-textarea textarea').val()).focus();
                        popout.remove();
                    });
                }

            });

            allmessages.on('mouseleave',function() {
                if (nameDateBlock.find('.staffportalreply').length == 1) {
                    $(this).find('.staffportalreply').empty().remove();
                }
                if (nameDateBlock.find('.staffportalpurge').length == 1) {
                    $(this).find('.staffportalpurge').empty().remove();
                }
                if (nameDateBlock.find('.staffportalstrike').length == 1) {
                    $(this).find('.staffportalstrike').empty().remove();
                }
                if (nameDateBlock.find('.staffportalkick').length == 1) {
                    $(this).find('.staffportalkick').empty().remove();
                }
                if (nameDateBlock.find('.staffportalban').length == 1) {
                    $(this).find('.staffportalban').empty().remove();
                }
            });
        }
    });
    console.log('StaffPortal helper started.');
};
StaffPortal.prototype.load = function() {};
StaffPortal.prototype.unload = function() {
    $(document).off("mouseover.rpr");
    $('.messages .message-group').off('mouseover');
    $('.messages .message-group').off('mouseleave');
};
StaffPortal.prototype.stop = function() {
    $(document).off("mouseover.rpr");
    $('.messages .message-group').off('mouseover');
    $('.messages .message-group').off('mouseleave');
};
