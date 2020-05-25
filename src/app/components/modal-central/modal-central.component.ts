import { Component, OnInit } from '@angular/core';
declare var $: any; // to use jQuery

@Component({
  selector: 'app-modal-central',
  templateUrl: './modal-central.component.html',
  styleUrls: ['./modal-central.component.sass']
})
export class ModalCentralComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      function alignModal() {
        var modalDialog = $(this).find(".central");
        // Applying the top margin on modal dialog to align it vertically center
        modalDialog.css("margin-top", Math.max(0, ($(window).height() - modalDialog.height()) / 2));
      }
      // Align modal when it is displayed
      $(".modal").on("shown.bs.modal", alignModal);

      // Align modal when user resize the window
      $(window).on("resize", function () {
        $(".modal:visible").each(alignModal);
      });
    });
  }

  




}
