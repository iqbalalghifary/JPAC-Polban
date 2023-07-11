    <!-- Signup Modal -->
    <div class="modal fade form-modal" id="signup" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog max-width-px-840 position-relative">
            <button type="button"
                class="circle-32 btn-reset bg-white pos-abs-tr mt-md-n6 mr-lg-n6 focus-reset z-index-supper"
                data-dismiss="modal"><i class="fa fa-close"></i></button>
            <div class="login-modal-main">
                <div class="row no-gutters">
                    <div class="col-12">
                        <div class="row">
                            <div class="heading">
                                <h3>Register your company <br> Today</h3>
                                <p>Create your account to continue <br> and get applicant easier.</p>
                            </div>
                            <form class="mt-3" method="POST" id="registerForm" enctype="multipart/form-data">
                                @csrf
                                <div class="form-group">
                                    <label for="companyName" class="label">Company Name</label>
                                    <input type="text" id="companyName" name="company_name" class="form-control" placeholder="Enter company name...">
                                </div>
                                <div class="form-group">
                                    <label for="address" class="label">Address</label>
                                    <input type="text" id="address" name="address" class="form-control" placeholder="Enter address...">
                                </div>
                                <div class="form-group">
                                    <label for="phoneNumber" class="label">Phone Number</label>
                                    <input type="number" id="phoneNumber" name="phone_number" class="form-control" placeholder="Enter phone number...">
                                </div>
                                <div class="form-group">
                                    <label for="email" class="label">Email</label>
                                    <input type="email" id="email" name="email" class="form-control" placeholder="Enter email...">
                                </div>
                                <div class="form-group">
                                    <label for="website" class="label">Website</label>
                                    <input type="text" id="website" name="website" class="form-control" placeholder="Enter Website...">
                                </div>
                                <div class="mb-3">
                                    <div class="form-group">
                                        <label for="logo" class="label">Logo</label>
                                    </div>
                                    <input class="form-control" name="logo" style="margin-top: -10px;" type="file" id="logo">
                                </div>
                                <div class="mb-3">
                                    <div class="form-group">
                                        <label for="mou" class="label">MoU</label>
                                    </div>
                                    <input class="form-control" name="mou" style="margin-top: -10px;" type="file" id="mou">
                                </div>
                                <div class="form-group d-flex flex-wrap justify-content-between">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="agreed" name="permission">
                                        <label class="form-check-label" for="flexCheckDefault">Agree to the <a
                                            href="#">Terms & Conditions</a></label>
                                    </div>
                                </div>
                                <div class="form-group mb-8 button" id="btnRegister">
                                    <button class="btn" type="submit">Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Signup Modal -->
